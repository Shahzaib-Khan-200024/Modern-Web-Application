import Image from "next/image";
import React from "react";

export const Logo = () => {
    return (
        <div className="flex items-center gap-2 text-white cursor-pointer transition duration-300">
            <Image
                src="/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="rounded hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-black hover:scale-110 transition-transform duration-300">
                Shahzaib <span className="text-green"> Codes</span>
            </span>
        </div>
    );
};
