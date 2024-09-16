"use client";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { PokemonType } from "../types/pokemon.type";
import { POKEMON_MAX_STAT } from "../constants/pokemon.constant";
import { hexToRgba } from "../utils/utils";

interface StatsBarProps {
    stat: number;
    type: PokemonType;
}

export const StatsBar: React.FC<StatsBarProps> = ({ stat, type }) => {
    const [trackColor, setTrackColor] = useState<string>("");
    const barColor = `var(--${type})`;
    let val = (stat / POKEMON_MAX_STAT) * 100;
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
