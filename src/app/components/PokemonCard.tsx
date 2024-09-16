import Link from "next/link";
import { PokeCard } from "../types/pokemon.interface";
import Image from "next/image";

interface PokemonCardProps {
    pokemonCard: PokeCard
}

export const PokemonCard: React.FC<PokemonCardProps> = async ({ pokemonCard }) => {
    return (
        <Link
            href={`/pokemons/${pokemonCard.id}`}
            className="w-fit shadow-drop-sm rounded-2xl bg-pokemon-card hover:shadow-drop-md"
        >
            <div className="flex justify-end mr-3 pt-2">
                <p className="caption text-medium-gray-scale">
                    #{pokemonCard.id < 10 ? `00${pokemonCard.id}` : pokemonCard.id < 100 ? `0${pokemonCard.id}` : pokemonCard.id}
                </p>
            </div>
            <div>
                <Image
                    src={pokemonCard.sprite}
                    alt="Pokémon Sprite"
                    width={220}
                    height={220}
                    className="px-4"
                >
                </Image>
                {/* <img
                    src={pokemonCard.sprite}
                    alt="Pokémon Sprite"
                    width={220}
                    className="px-4"
                /> */}
            </div>
            <div className="capitalize">
                <p className="text-center body-3 pb-2">{pokemonCard.name}</p>
            </div>
        </Link>
    );
};
