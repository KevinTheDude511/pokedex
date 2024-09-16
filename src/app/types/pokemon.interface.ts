import { PokemonType } from "./pokemon.type";

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