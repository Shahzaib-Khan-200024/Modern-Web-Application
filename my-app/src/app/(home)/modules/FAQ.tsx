import { Accordion } from "@/components/Accordion/Accordion";
import React from "react";

export const FAQ = () => {
    return (
        <section className="bg-lightGray py-8 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="mb-4">FAQ</h2>
                    <p>Here are some common questions and answers about our services.</p>
                </div>
                <Accordion questions={questions} />
            </div>
        </section>
    );
};

const questions = [
    {
        question: "How much will the website cost?",
        answer: "The cost varies depending on the complexity and features required. We'll provide a detailed quote after discussing your specific needs.",
    },
    {
        question: "How long will it take to build the website?",
        answer: "Typically, a basic website takes 2-3 weeks to complete. More complex projects may take longer, depending on the specific requirements.",
    },
    {
        question: "Will the website be mobile-friendly?",
        answer: "Absolutely! We ensure that all our websites are fully responsive and optimized for mobile devices, providing a seamless user experience across all platforms.",
    },
    {
        question: "Can I update the website content myself?",
        answer: "Yes, we provide an easy-to-use content management system (CMS) that allows you to update and manage your website content effortlessly. Training and support are also included.",
    },
    {
        question: "Do you provide hosting services?",
        answer: "Yes, we offer reliable and secure hosting services tailored to meet your website's needs. Our hosting packages include regular backups, security monitoring, and technical support.",
    },
    {
        question: "Will my website be search engine optimized (SEO)?",
        answer: "Yes, we implement best SEO practices to ensure your website is optimized for search engines. This includes keyword research, on-page optimization, and meta tag implementation.",
    },
    {
        question: "Can you integrate social media into my website?",
        answer: "Certainly! We can integrate social media platforms to enhance your online presence and engagement. This includes social media buttons, feeds, and sharing functionalities.",
    },
    {
        question: "What's included in the website maintenance package?",
        answer: "Our maintenance package includes regular updates, security patches, performance optimization, and technical support to ensure your website runs smoothly and efficiently.",
    },
    {
        question: "How secure will my website be?",
        answer: "We prioritize the security of your website by implementing robust security measures, including SSL certificates, firewalls, and regular security audits to protect against threats.",
    },
    {
        question: "Do you offer e-commerce functionality?",
        answer: "Yes, we can integrate e-commerce solutions to allow you to sell products or services online. Our e-commerce features include product management, payment gateways, and order tracking.",
    },
];
