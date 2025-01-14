"use client";

import React, { useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

export const AccordionItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleIsOpen = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className="p-4 bg-white shadow-sm rounded-lg cursor-pointer">
            <div
                className="flex justify-between items-center gap-4"
                onClick={toggleIsOpen}
            >
                <h5>{question}</h5>
                <SlArrowDown
                    className={`text-green transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </div>

            {/* Animated Content */}
            <div
                ref={contentRef}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-custom opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                    maxHeight: isOpen
                        ? contentRef.current?.scrollHeight
                        : 0,
                }}
            >
                <p className="text-gray-500 mt-2">{answer}</p>
            </div>
        </div>
    );
};
