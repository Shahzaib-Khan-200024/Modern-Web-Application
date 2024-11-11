"use client";

import { sendMessage } from "@/app/actions";
import { Button } from "@/components/Button";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";

export const ContactUsForm = () => {
const [state, formAction] = useActionState(sendMessage, {
    message: "",
})

    return (
        <form action={formAction} className="p-8 text-white space-y-4 rounded-lg">
            <div className="space-y-2">
                <p className="font-bold">Name</p>
                <input name="name" type="text" required className="w-full p-3 bg-black rounded-lg text-white" />
            </div>

            <div className="space-y-2">
                <p className="font-bold">Company</p>
                <input name="company" type="text" required className="w-full p-3 bg-black rounded-lg text-white" />
            </div>

            <div className="space-y-2">
                <p className="font-bold">Email</p>
                <input name="email" type="email" required className="w-full p-3 bg-black rounded-lg text-white" />
            </div>

            <div className="space-y-2">
                <p className="font-bold">Message</p>
                <textarea name="message" required className="w-full p-3 bg-black rounded-lg text-white" />
            </div>
            {state.message && (
                <p aria-live="polite" className="not-sr-only">{state.message}</p>
            )}
            <div className="flex justify-center">
                <SubmitButton />
            </div>
        </form>
    );
};

export const SubmitButton = () => {
    const { pending } = useFormStatus();

    return <Button disabled={pending} />;
};