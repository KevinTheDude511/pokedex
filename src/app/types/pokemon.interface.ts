import { PokemonType } from "./pokemon.type";

export interface PokeType {
    type: {
        name: PokemonType;
    };
}

export interface PokemonAbility {
    ability: {
        name: string;
    };
}

export interface PokemonStat {
    stat: {
        name: string;
    };
    base_stat: number;
}

export interface PokemonSprites {
    other: {
        'official-artwork': {
            front_default: string;
        };
    };
}

export interface PokemonApiResponse {
    id: number;
    name: string;
    types: PokeType[];
    weight: number;
    height: number;
    abilities: PokemonAbility[];
    stats: PokemonStat[];
    sprites: PokemonSprites;
}

export interface PokemonSpeciesApiResponse {
    flavor_text_entries: Array<{
        flavor_text: string;
    }>;
}

export interface Stat {
    name: string;
    baseStat: number;
}

export interface PokemonDetails {
    id: number;
    name: string;
    types: PokemonType[];
    sprite: string;
    weight: number;
    height: number;
    moves: string[];
    description: string;
    stats: Stat[];
}

export interface PokeCard {
    id: number;
    name: string;
    sprite: string;
}