import React from "react";
import Image from "next/image";
import InfesImg from "./../../../../public/infes.png";
import StatybosImg from "./../../../../public/statybos2.png";
import ShawnImg from "./../../../../public/shawn.jpeg";
import RafaelImg from "./../../../../public/rafael.jpg";
import { ImageIsolated } from "@/components/ImageIsolated";

export const OurWork = () => {
    return ( 
        <section className="bg-dark py-8 md:py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center mb-8">
                    Our <span className="text-green text-center mb-8">Work</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                    {projects.map((p, i) => (
                        <div key={p.title}>
                            <h3 className="mb-4">{p.title}</h3>
                            <div className="border-8 rounded-lg border-green">
                            <ImageIsolated src={p.image} alt={`project${i}`} />
                            </div>
                            <div className="flex justify-between gap-2 mt-2">
                                {p.stats.map((s) => (
                                    <div className="text-center" key={s.description}>
                                        <h3 className="text-green mb-2">{s.value}</h3>
                                        <p className="font-bold">{s.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <div className="flex items-center gap-4 justify-center mb-4">
                                    <div className="relative w-24 h-24 rounded-full overflow-hidden border border-white">
                                        <Image 
                                            src={p.review.image} 
                                            alt={`review person ${i}`} 
                                            fill 
                                        />
                                    </div>
                                    <div>
                                        <h5 className="mb-1">{p.review.name}</h5>
                                        <p className="text-xl font-bold">{p.review.position}</p>
                                    </div>
                                </div>
                                <p className="italic text-center">{p.review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const projects = [
    {
        title: "The Infes team decided to renew",
        image: InfesImg,
        link: "https://infes.lt",
        stats: [
            { value: "+218%", description: "Qualified inquiries" },
            { value: "+22%", description: "Time spent on the website" },
            { value: "+81%", description: "Pages visited per session" },
        ],
        review: {
            name: "John",
            image: ShawnImg,
            position: "CEO, Infes",
            text: "The team at Shahzaib Codes is incredible. They are professional and very easy to work with. They took our ideas and brought them to life. I highly recommend them.",
        },
    },
    {
        title: "The uniqueness of Aronvera",
        image: StatybosImg,
        link: "https://aronvera.lt",
        stats: [
            { value: "+128%", description: "Qualified inquiries" },
            { value: "+44%", description: "Time spent on the website" },
            { value: "+68%", description: "Pages visited per session" },
        ],
        review: {
            name: "Shawn",
            image: RafaelImg,
            position: "CEO, Aronvera",
            text: "We constantly did not find time for our website. Reason was coz we were so busy and we thought it will steal our time. But we are grateful to Shahzaib Codes as it required minimal effort from our side. Recommend.",

        },
    },
];
