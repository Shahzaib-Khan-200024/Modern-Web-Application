'use server'

import { z } from "zod";

export const sendMessage = async (prevState: {message: string}, formData: FormData) => {
    const schema = z.object({
        name: z.string().min(1),
        company: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1),
    });

    const parse = schema.safeParse({
        name: formData.get("name"),
        company: formData.get("company"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if(!parse.success) {
        return {
            message: 'Failed to send message.'
        };
    }

    const { name, company, email, message } = parse.data;

    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            message: "Message sent successfully.",
        }
    } catch (e) {
        return {
            message: "Something went wrong.",
        };
    }
};