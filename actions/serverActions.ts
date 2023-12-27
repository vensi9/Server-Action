"use server";

import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {

    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) return;

    const newProduct= {
        product: product,
        price: price,
    };

    await fetch('https://63b7b2474f17e3a931da1e08.mockapi.io/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            "Content-Type": "application/json"
        }
    })

    revalidateTag('products')
}