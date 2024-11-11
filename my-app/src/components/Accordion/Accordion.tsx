import React from "react";
import { AccordionItem } from "./AccordionItem";
import Link from "next/link";

export const Accordion = ({
    questions,
}: {
    questions: { question: string; answer: string }[];
}) => {
    return (
        <>
            <div className="grid gap-2 md:gap-4">
            {questions.map((q) => ( 
                <AccordionItem {...q} key={q.question} />
            ))}
            </div>

            <p className="text-center text-gray-500 mt-4">
                If you have any other questions, feel free to contact us <Link href="#contact" className="text-green font-bold">contact us</Link>.
            </p>
        </>
    );
};
