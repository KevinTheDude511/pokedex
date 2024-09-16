import SearchBar from "./components/SearchBar";
import { PokemonCard } from "./components/PokemonCard";
import { PokeBall } from "./components/Icons";
import { MAX_POKEMON } from "./constants/pokemon.constant";
import { PokeCard } from "./types/pokemon.interface";
import SortButton from "./components/SortButton";

export default async function HomePage({
    searchParams,
}: {
    searchParams: { sort?: string; search?: string };
}) {
    const pokemonIds = Array.from(
        { length: MAX_POKEMON },
        (_, index) => index + 1
    );

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) throw new Error("No API");

    let pokemonCards: PokeCard[] = await Promise.all(
        pokemonIds.map(async (id) => {
            const res = await fetch(`${apiUrl}pokemon/${id}`);
            const pokemon = await res.json();

            const name = pokemon["name"];
            if (!name) throw new Error(`No Pokemon name for id: ${id}`);

            const sprite =
                pokemon["sprites"]["other"]["official-artwork"][
                    "front_default"
                ];
            if (!sprite) throw new Error(`No Pokemon sprite for id: ${id}`);

            return {
                id,
                name,
                sprite,
            };
        })
    );

    const sortOption = searchParams.sort || "number";
    if (sortOption === "name") {
        pokemonCards = pokemonCards.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } else {
        pokemonCards = pokemonCards.sort((a, b) => a.id - b.id);
    }

    const searchQuery = searchParams.search?.toLowerCase() || "";
    if (searchQuery) {
        pokemonCards = pokemonCards.filter((pokemonCard) =>
            pokemonCard.name.toLowerCase().includes(searchQuery)
        );
    }

    return (
        <div className="bg-primary min-h-screen pb-4">
            <header className="px-8 py-4">
                <div className="flex items-center mb-4">
                    <PokeBall className="w-[30px] h-[30px] text-white"></PokeBall>
                    <p className="headline text-white pl-8">Pokédex</p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <SearchBar></SearchBar>
                    <div className="pl-10">
                        <SortButton></SortButton>
                    </div>
                </div>
            </header>
            <main className="bg-background m-4 px-4 pt-6 pb-10 rounded-lg">
                {pokemonCards.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                        {pokemonCards.map((pokemonCard, index) => (
                            <PokemonCard
                                key={index}
                                pokemonCard={pokemonCard}
                            ></PokemonCard>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center mt-4">
                        <p className="subtitle-1 text-dark-gray-scale">No Pokémon</p>
                    </div>
                )}
            </main>
        </div>
    );
}
