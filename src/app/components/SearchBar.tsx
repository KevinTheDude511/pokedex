"use client";
import { useState } from "react";
import { Search } from "./Icons";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const currentParams = new URLSearchParams(searchParams.toString());
        if (searchQuery) {
            currentParams.set("search", searchQuery);
        } else {
            currentParams.delete("search");
        }

        router.push(`/?${currentParams.toString()}`);
    };

    return (
        <form className="w-full relative" onSubmit={handleSearch}>
            <input
                type="text"
                name="search"
                placeholder="Search (press Enter to search)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl pl-10 py-2 pr-2 shadow-inner-sm text-dark-gray-scale body-3 placeholder:text-medium-gray-scale focus:shadow-drop-sm focus:outline-none focus:border-none"
            />
            <div>
                <Search className="w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2 stroke-primary"></Search>
            </div>
        </form>
    );
}
