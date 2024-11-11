import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Shahzaib Codes. All rights reserved.
                </p>
            </div>
        </footer>
    );
};