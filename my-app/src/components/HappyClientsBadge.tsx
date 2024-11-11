import Image from "next/image";
import React from "react";

export const HappyClientBadge = () => {
    return (
        <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
            {
                [...Array(5)].map((_, i) => (
                    <Image 
                    src="/star.png" 
                    alt="star" 
                    width={20} 
                    height={20} 
                    key={`star${i}`} 
                    />
                ))}
        </div>
        <p className="text-sm font-bold text-green">
            75+ happy clients
        </p>
        </div>
    );
};