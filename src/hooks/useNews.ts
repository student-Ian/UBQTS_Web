'use client';
import { useRouter } from "next/navigation";

export default function useNews() {
    const router = useRouter();

    //POST
    const useNews = async ({
        picture, 
        title, 
        description,
        date,
    }: {
        picture: string;
        title: string;
        description: string;
        date: Date;
    }) => {
        const res = await fetch("/api/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                picture,
                title,
                description,
                date,
            }),
        });
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
    }

    //GET
    const getNews = async () => {
        const res = await fetch("/api/news", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
        return await res.json();
    }

    //PUT
    const putNews = async ({
        id,
        picture,
        title, 
        description,
        date,
    }: {
        id: number;
        picture: string;
        title: string;
        description: string;
        date: Date;
    }) => {
        const res = await fetch('/api/news', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                description,
            }),
        });
        const data = await res.json();
        console.log(data);
        if (!res.ok) {
            const body = await res.json();
            throw new Error(body.error);
        }
        router.refresh();
    }

    return {
        useNews,
        getNews,
        putNews,
    };
}