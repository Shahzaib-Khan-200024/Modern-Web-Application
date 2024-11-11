import Image from "next/image";
import React from "react";

export const Logo = () => {
    return (
        <div className="flex items-center gap-2 text-white">
            <Image src="/logo.png" alt="logo" width={40} height={40} className="rounded" />
            <span className="text-xl font-black">Shahzaib Codes</span>
        </div>
    );
};
