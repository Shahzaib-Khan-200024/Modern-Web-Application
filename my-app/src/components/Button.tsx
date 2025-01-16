import React, { ButtonHTMLAttributes } from "react";
import { BsArrowRight } from "react-icons/bs";

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {} // Added export keyword

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => { // Ensure ButtonProps is being used here
    return (
        <button 
            className="flex justify-center md:w-auto w-full items-center md:w-auto md:inline-flex gap-4 bg-green text-white text-lg md:text-xl font-bold py-2 px-4 rounded disabled:bg-gray-300" 
            {...rest} // Spread the rest props correctly
        >
            <span className="flex items-center gap-2">Contact us</span>
            <BsArrowRight />
        </button>
    );
};
