"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="bg-dark pt-4">
            <div className="container mx-auto px-4">
                <header className="flex justify-between items-center">
                    <Logo />
                    {/* Toggle button for small screens */}
                    <button
                        className="text-white lg:hidden focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                    {/* Sidebar navigation */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-dark transform ${
                            isOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out lg:hidden`}
                    >
                        <button
                            className="text-white p-4 focus:outline-none"
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                        <nav className="flex flex-col space-y-4 p-8">
                            <Link
                                href="#"
                                className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="#OurFocus"
                                className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                                onClick={closeMenu}
                            >
                                OurFocus
                            </Link>
                            <Link
                                href="#OurWork"
                                className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                                onClick={closeMenu}
                            >
                                OurWork
                            </Link>
                            <Link
                                href="#FAQ"
                                className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                                onClick={closeMenu}
                            >
                                FAQ
                            </Link>
                            <Link
                                href="#OurProcess"
                                className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                                onClick={closeMenu}
                            >
                                OurProcess
                            </Link>
                        </nav>
                    </div>
                    {/* Normal navigation for larger screens */}
                    <nav className="hidden lg:flex lg:space-x-6 lg:items-center">
                        <Link
                            href="#"
                            className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                        >
                            Home
                        </Link>
                        <Link
                            href="#OurFocus"
                            className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                        >
                            OurFocus
                        </Link>
                        <Link
                            href="#OurWork"
                            className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                        >
                            OurWork
                        </Link>
                        <Link
                            href="#FAQ"
                            className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                        >
                            FAQ
                        </Link>
                        <Link
                            href="#OurProcess"
                            className="text-white hover:text-gray-500 transition duration-300 ease-in-out"
                        >
                            OurProcess
                        </Link>
                    </nav>
                </header>
            </div>
        </div>
    );
};
