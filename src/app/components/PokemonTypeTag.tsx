import { PokemonType } from "../types/pokemon.type";

export interface PokemonTypeProps {
    type: PokemonType;
}

export const PokemonTypeTag: React.FC<PokemonTypeProps> = ({ type }) => {
    let bgColor = `var(--${type})`;
    if (type === "no-type") {
        bgColor = `var(--medium-gray-scale)`;
    }
    return (
        <div
            className={`w-fit border-0 rounded-3xl px-5 py-2`}
            style={{ backgroundColor: bgColor }}
        >
            <p className="capitalize subtitle-3 text-white">
                {type === "no-type" ? "Type" : type}
            </p>
        </div>
    );
};
