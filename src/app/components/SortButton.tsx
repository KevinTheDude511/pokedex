"use client";
import { useState } from "react";
import { HashTag, TextFormat } from "./Icons";
import { useRouter, useSearchParams } from "next/navigation";
import { RadioButton } from "./Filters";

export default function SortButton() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const options = ["number", "name"];
    const currentSort = searchParams.get("sort") || "number";
    
    const [selectedOption, setSelectedOption] = useState<string>(currentSort);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSortChange = (option: string) => {
        if (option !== selectedOption) {
            const queryParams = new URLSearchParams(searchParams.toString());
            queryParams.set("sort", option);
            router.push(`?${queryParams.toString()}`);
            setSelectedOption(option);
            setIsOpen(false);
        }
    };

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={handleButtonClick}
                className="w-fit p-2 rounded-full shadow-inner-sm bg-white hover:shadow-drop-sm"
            >
                {selectedOption === "number" ? (
                    <HashTag className="w-5 h-5 stroke-primary fill-primary"></HashTag>
                ) : (
                    <TextFormat className="w-5 h-5 stroke-primary fill-primary"></TextFormat>
                )}
            </button>
            {isOpen && (
                <div className="absolute top-[100%] left-auto right-0 z-10 bg-primary rounded-xl border-medium-gray-scale border-2 mt-3">
                    <p className="subtitle-2 text-white my-3 text-center">
                        Sort by:
                    </p>
                    <div className="bg-white m-1 rounded-xl shadow-inner-sm">
                        {options.map((option, index) => (
                            <div key={index} className="px-4 py-3">
                                <RadioButton
                                    label={option}
                                    labelName="sort"
                                    checked={selectedOption === option}
                                    onChange={() => handleSortChange(option)}
                                ></RadioButton>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
