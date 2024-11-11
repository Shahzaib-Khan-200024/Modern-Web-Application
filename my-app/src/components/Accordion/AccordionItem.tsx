'use client'

import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const AccordionItem = ({ question, answer }: { question: string; answer: string; }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleIsOpen = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <div className="p-4 bg-white shadow-sm rounded-lg cursor-pointer" onClick={toggleIsOpen}>
            <div className="flex justify-between items-center gap-4">
                <h5>{question}</h5>
                {isOpen ? <SlArrowUp className="text-green" /> : <SlArrowDown className="text-green" />}
            </div>

            {isOpen && <p className="text-gray-500 mt-2">{answer}</p>}
        </div>
    );
};