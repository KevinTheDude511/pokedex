"use client";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { PokemonType } from "../types/pokemon.type";

interface StatsBarProps {
    stat: number;
    type: PokemonType;
}

function hexToRgba(hex: string, opacity: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const StatsBar: React.FC<StatsBarProps> = ({ stat, type }) => {
    const [trackColor, setTrackColor] = useState<string>("");
    const barColor = `var(--${type})`;
    let val = (stat / 300) * 100;
    if (val > 100) {
        val = 100;
    }

    useEffect(() => {
        const computedColor = getComputedStyle(document.documentElement)
            .getPropertyValue(`--${type}`)
            .trim();
        const rgbaColor = hexToRgba(computedColor, 0.3);
        setTrackColor(rgbaColor);
    }, [type]);

    return (
        <Box sx={{ width: "100%" }}>
            <LinearProgress
                variant="determinate"
                value={val}
                sx={{
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: barColor,
                    },
                    backgroundColor: trackColor,
                }}
            ></LinearProgress>
        </Box>
    );
};
