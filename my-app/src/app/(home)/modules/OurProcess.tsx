import React from "react";

export const OurProcess = () => {
    return (
        <section className="bg-lightGray py-8 md:py-16 text-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="mb-8 text-center text-black">
                    Our <span className="text-green">Process</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {steps.map((step) => (
                        <div
                            key={step.step}
                            className="p-6 rounded-lg bg-white transform transition-transform duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <h4 className="text-green mb-4">{step.step}</h4>
                            <h3 className="mb-4 text-black">{step.title}</h3>
                            <p className="text-black">{step.description}</p>
                        </div>
                    ))};
                </div>
            </div>
        </section>
    );
};

const steps = [
    {
        step: "01 STEP",
        title: "Consultation",
        description:
            "Once you've submitted your project request, one of our web design experts will contact you to schedule a video call. During this 1:1 consultation, we will focus on understanding your vision, goals, and requirements.",
    },
    {
        step: "02 STEP",
        title: "Planning & Strategy",
        description:
            "Our team will conduct a thorough analysis of your requirements and create a detailed plan and strategy. This will include wireframes, project timelines, and a comprehensive approach to achieve your desired outcomes.",
    },
    {
        step: "03 STEP",
        title: "Design & Development",
        description:
            "Following the planning phase, our designers and developers will start working on your project. We will create visually appealing designs and develop a fully functional website tailored to your specifications.",
    },
    {
        step: "04 STEP",
        title: "Launch & Support",
        description:
            "After rigorous testing and your final approval, we will launch your website. We also provide ongoing support and maintenance to ensure your website remains up-to-date, secure, and running smoothly.",
    },
];
