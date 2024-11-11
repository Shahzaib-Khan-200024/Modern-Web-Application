import { HappyClientBadge } from "@/components/HappyClientsBadge";
import Image from "next/image";
import React from "react";

export const ContactUsDetails = () => {
    return ( 
        <div>
            <Image src="/shahzaib.png"alt="shahzaib" width={150} height={150} className="rounded-full border-2 border-white mb-4" />
            <h2 className="mb-2">
                Talk to our <span className="text-green">programming expert</span>
            </h2>
            <p className="mb-4">
                <b>Shahzaib, together with his team,</b> has helped dozens of companies create unique, fast, user-friendly, and converting websites.
                <br />
                <br />
                <b>We are open, attentive, and always willing to help.</b> If you have any questions, we are just a call or a meeting away.
            </p>
            <HappyClientBadge />
        </div>
    );
};