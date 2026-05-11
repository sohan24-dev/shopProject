import Products from "@/components/Products";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteproduct = async (id) => {
    'use server'
    const res = await fetch(`https://shop-server-3-h0tz.onrender.com/data/${id}`, {
        method: "DELETE",
        // headers:
    })
    const data = await res.json();
    if (data.deletedCount > 0) {
        revalidatePath('/products');
    }

    return data
}

export const createProduct = async (formData) => {
    'use server'
    const newProduct = Object.fromEntries(formData.entries())
    const res = await fetch('https://shop-server-3-h0tz.onrender.com/data', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    });
    const data = await res.json();
    // console.log(data, "after post");
    if (data.insertedId) {
        revalidatePath('/Products')
        redirect('/products')
    }
    return data

}

export const updateUser = async (id, formData) => {
    'use server';
    // console.log(id, formData, "formData");
    const updatedUser = Object.fromEntries(formData.entries());
    // console.log(updateUser, "upDateuser");
    const res = await fetch(`https://shop-server-3-h0tz.onrender.com/data/${id}`, {
        method: "PATCH",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(updatedUser)
    })
    const data = await res.json()
    // console.log(data, "data");
    if (data.modifiedCount > 0) {
        revalidatePath('/Products')
        redirect('/products')
    }

    return data
}

