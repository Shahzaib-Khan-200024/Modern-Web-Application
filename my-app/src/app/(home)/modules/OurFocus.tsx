import React from "react";
import Image from "next/image";
import BrandingImg from "./../../../../public/branding.png";
import DirectionsImg from "./../../../../public/directions.png";
import MoneyImg from "./../../../../public/money.png";
import ResponsiveImg from "./../../../../public/responsive.png";
import SeoImg from "./../../../../public/seo.png";
import SpeedometerImg from "./../../../../public/speedometer.png";

export const OurFocus = () => {
    return (
        <section className="bg-lightGray py-8 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="max-w-6xl mx-auto text-center mb-8">
                    <h2 className="mb-4">
                        Our <span className="text-green">Focus</span>
                    </h2>
                    <p>We focus on building websites that help you achieve your goals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature.description}
                            className="bg-white py-4 px-4 rounded-lg shadow-sm transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <div className="inline-block p-4 bg-gradient-to-r from-green to-[#50e2d3] rounded-lg">
                                <Image
                                    src={feature.image}
                                    alt="feature"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <h3 className="my-4">{feature.title}</h3>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: feature.description,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const features = [
    {
        image: BrandingImg,
        title: "Unique Design",
        description:
            "Our professional UX/UI designer will create a unique design tailored specifically for <b>your</b> brand.<br/><br/>Every element's positioning colors, font size, and styles are carefully selected to ensure the website is not only beautiful but also <b>user-friendly</b>.",
    },
    {
        image: SpeedometerImg,
        title: "Performance",
        description:
            "Website performance is one of the key SEO indicators. This is because a fast website ensures a better user experience.<br/><br/>We write code instead of using templates or website builders. This allows us to create a <b>fast,</b> secure, and flexible website.",
    },
    {
        image: DirectionsImg,
        title: "Flexibility",
        description:
            'If you have used a template-based website or a website builder, you probably encountered the phenomenon of "it\'s impossible to do what I want."<br/><br/>We code from scratch, so we can offer a more <b>flexible</b> solution that meets your needs.',
    },
    {
        image: SeoImg,
        title: "SEO Optimization",
        description:
            "Website SEO Optimization is one of the most important things to do if you want your website to be found in Google search.<br/><br/>We ensure that your website is <b>SEO optimized</b> and meets the main SEO requirements.",
    },
    {
        image: ResponsiveImg,
        title: "Responsive Design",
        description:
            "In the modern world, it is important that your website looks good on all devices, whether it is a desktop, tablet, or smartphone.<br/><br/>We create websites that are <b>responsive</b> and adapt to any screen size.",
    },
    {
        image: MoneyImg,
        title: "Conversion",
        description:
            "The main goal of any website is to convert visitors into customers.<br/><br/>We create websites that are not only beautiful but also <b>convert visitors into customers.</b>",
    },
];
