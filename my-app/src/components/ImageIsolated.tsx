import Image, { StaticImageData } from "next/image";
import React from "react";

export const ImageIsolated = ({
    src, 
    alt
}: { 
    src: StaticImageData; 
    alt: string 
}) => {
    return (
    <Image 
    src={src} 
    alt={alt} 
    sizes="100vw" 
    width={0} 
    height={0} 
    style={{ width: "100%", height: "auto" }} 
    />
    );
};