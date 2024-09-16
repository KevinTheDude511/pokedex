import {
    LeftArrow,
    LeftChevron,
    RightChevron,
    Weight,
    Ruler,
} from "@/app/components/Icons";
import { PokemonTypeTag } from "@/app/components/PokemonTypeTag";
import { StatsBar } from "@/app/components/StatsBar";
import {
    PokemonDetails,
    PokemonApiResponse,
    PokemonSpeciesApiResponse,
    PokeType,
    PokemonAbility,
    PokemonStat,
} from "@/app/types/pokemon.interface";
import Link from "next/link";
import Image from "next/image";
import { MAX_POKEMON } from "@/app/constants/pokemon.constant";

export default async function PokemonDetailsPage({
    params,
}: {
    params: { pokemonId: string };
}) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) throw new Error("No API");

    const [pokemonFetch, speciesFetch] = await Promise.all([
        fetch(`${apiUrl}pokemon/${params.pokemonId}`),
        fetch(`${apiUrl}pokemon-species/${params.pokemonId}`),
    ]);

    const [pokemonJson, speciesJson]: [
        PokemonApiResponse,
        PokemonSpeciesApiResponse
    ] = await Promise.all([pokemonFetch.json(), speciesFetch.json()]);

    const description: string = speciesJson.flavor_text_entries[0].flavor_text;
    const cleanedDescription = description
        .replace(/\n/g, " ")
        .replace(/\f/g, " ");

    const pokemon: PokemonDetails = {
        id: Number(params.pokemonId),
        name: pokemonJson.name,
        types: pokemonJson.types.map((pokeType: PokeType) => {
            return pokeType.type.name;
        }),
        sprite: pokemonJson.sprites.other["official-artwork"].front_default,
        weight: pokemonJson.weight / 10, // weight is in hectograms
        height: pokemonJson.height / 10, // height is in decimetres
        moves: pokemonJson.abilities.map((ability: PokemonAbility) => {
            return ability.ability.name;
        }),
        description: cleanedDescription,
        stats: pokemonJson.stats.map((stat: PokemonStat) => {
            let statName: string = stat.stat.name;
            switch (statName) {
                case "hp":
                    statName = "HP";
                    break;
                case "attack":
                    statName = "ATK";
                    break;
                case "defense":
                    statName = "DEF";
                    break;
                case "special-attack":
                    statName = "SATK";
                    break;
                case "special-defense":
                    statName = "SDEF";
                    break;
                case "speed":
                    statName = "SPD";
                    break;
                default:
                    break;
            }
            return {
                name: statName,
                baseStat: stat.base_stat,
            };
        }),
    };

    const typeColor = `var(--${pokemon.types[0]})`;

    return (
        <div
            className="min-h-screen p-2"
            style={{ backgroundColor: typeColor, color: typeColor }}
        >
            <div className="w-full px-10 py-5 flex justify-between items-center">
                <div className="w-[15%] flex">
                    <Link href={"/"}>
                        <LeftArrow className="w-[40px] h-[40px] text-white"></LeftArrow>
                    </Link>
                    <h1 className="headline text-white pl-10 capitalize">
                        {pokemon.name}
                    </h1>
                </div>
                <div className="pr-5">
                    <p className="subtitle-2 text-white">
                        #
                        {pokemon.id < 10
                            ? `00${pokemon.id}`
                            : pokemon.id < 100
                            ? `0${pokemon.id}`
                            : pokemon.id}
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-center px-12">
                {pokemon.id - 1 >= 1 ? (
                    <Link href={`/pokemons/${pokemon.id - 1}`}>
                        <LeftChevron className="w-[30px] h-[30px] stroke-white"></LeftChevron>
                    </Link>
                ) : (
                    <div></div>
                )}
                <Image src={pokemon.sprite} alt={pokemon.name} width={350} height={350}></Image>
                {pokemon.id + 1 <= MAX_POKEMON ? (
                    <Link href={`/pokemons/${pokemon.id + 1}`}>
                        <RightChevron className="w-[30px] h-[30px] stroke-white"></RightChevron>
                    </Link>
                ) : (
                    <div></div>
                )}
            </div>
            <div className="bg-white px-7 pt-[7em] mt-[-7em] rounded-2xl shadow-inner-sm">
                <div className="flex justify-center gap-8">
                    {pokemon.types.map((type, index) => (
                        <PokemonTypeTag
                            key={index}
                            type={type}
                        ></PokemonTypeTag>
                    ))}
                </div>
                <div className="m-6">
                    <p className="text-center subtitle-1">About</p>
                </div>
                <div className="flex justify-evenly text-dark-gray-scale">
                    <div className="w-[30%] flex flex-col items-center py-4">
                        <div className="flex items-center mb-5">
                            <Weight className="w-[30px] h-[30px]"></Weight>
                            <span className="ml-5 body-3">
                                {pokemon.weight} kg
                            </span>
                        </div>
                        <p className="caption">Weight</p>
                    </div>
                    <div className="w-[30%] border-x-2 border-light-gray-scale flex flex-col items-center py-4">
                        <div className="flex items-center mb-5">
                            <Ruler className="w-[30px] h-[30px] rotate-90"></Ruler>
                            <span className="ml-5 body-3">
                                {pokemon.height} m
                            </span>
                        </div>
                        <p className="caption">Height</p>
                    </div>
                    <div className="w-[30%] flex flex-col items-center py-4">
                        <div className="body-3 mb-1">
                            {pokemon.moves.map((move, index) => (
                                <p key={index} className="capitalize">
                                    {move}
                                </p>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <p className="caption">Moves</p>
                        </div>
                    </div>
                </div>
                <div className="my-5 text-dark-gray-scale body-3">
                    <p className=" leading-7 tracking-wider">
                        {pokemon.description}
                    </p>
                </div>
                <div className="my-5 pb-5">
                    <div className="my-5 flex justify-center items-center">
                        <p className="subtitle-1">Base Stats</p>
                    </div>
                    <div>
                        {pokemon.stats.map((stat, index) => (
                            <div key={index} className="flex">
                                <div className="w-[5%] pr-7 py-1 border-r-2 border-light-gray-scale">
                                    <span className="block text-right subtitle-3">
                                        {stat.name}
                                    </span>
                                </div>
                                <div className="w-[90%] flex items-center py-1 pl-7">
                                    <span className="mr-5 text-dark-gray-scale body-3">
                                        {stat.baseStat < 10
                                            ? `00${stat.baseStat}`
                                            : stat.baseStat < 100
                                            ? `0${stat.baseStat}`
                                            : stat.baseStat}
                                    </span>
                                    <StatsBar
                                        stat={stat.baseStat}
                                        type={pokemon.types[0]}
                                    ></StatsBar>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
