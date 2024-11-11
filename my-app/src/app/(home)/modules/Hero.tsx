import React from "react";
import { Button } from "@/components/Button";
import { HappyClientBadge } from "@/components/HappyClientsBadge";
import { ImageIsolated } from "@/components/ImageIsolated";
import mockupImg from "./../../../../public/mockup.png";
import Link from "next/link";

export const Hero = () => {
    return (
        <div className="bg-dark py-12 text-white">
            <div className="container mx-auto px-4">
            <HappyClientBadge />
                <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-4 mt-4">
                    <div className="order-2 md:order-1">
                        <h1 className="mb-2">We build <span className="text-green">professional</span> websites</h1>
                        <p className="text-xl mb-6">
                            <b>Goal oriented websites.</b> Sell more, get more leads, or present yourself to the whole world as you only imagined until now. We love when clients succeed.
                        </p>
                        <Link href="#contact"><Button /></Link>
                    </div>
                    <div className="order-1 md:order-2">
                        <ImageIsolated src={mockupImg} alt="mockup" />
                    </div>
                </div>
            </div>
        </div>
    );
};
