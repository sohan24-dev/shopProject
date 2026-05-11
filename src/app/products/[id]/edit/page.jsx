import { Button, Input, Label, TextField } from "@heroui/react";
import { getProductsDetails } from "@/app/lib/data";
import { updateUser } from "@/app/lib/action";
import Link from "next/link";

const Editpage = async ({ params }) => {
    const { id } = await params; // ✅ FIXED

    const Products = await getProductsDetails(id);

    const updatedUserWrapper = async (formData) => {
        'use server';
        return await updateUser(id, formData);
    };

    return (
        <div className="container mx-auto px-4 mt-6 mb-10">
            <form
                action={updatedUserWrapper}
                className="flex flex-col gap-5 bg-white shadow-lg rounded-2xl p-6"
            >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <TextField name="name" defaultValue={Products.name}>
                        <Label>Product Name</Label>
                        <Input />
                    </TextField>

                    <TextField name="category" defaultValue={Products.category}>
                        <Label>Category</Label>
                        <Input />
                    </TextField>

                    <TextField name="brand" defaultValue={Products.brand}>
                        <Label>Brand</Label>
                        <Input />
                    </TextField>

                    <TextField name="price" defaultValue={Products.price}>
                        <Label>Price</Label>
                        <Input />
                    </TextField>

                    <TextField name="quantity" defaultValue={Products.quantity}>
                        <Label>Quantity</Label>
                        <Input />
                    </TextField>

                    <TextField name="made_in" defaultValue={Products.made_in}>
                        <Label>Made In</Label>
                        <Input />
                    </TextField>
                </div>

                <TextField name="img" defaultValue={Products.img}>
                    <Label>Image</Label>
                    <Input />
                </TextField>

                <div>
                    <Label>Description</Label>
                    <textarea
                        name="description"
                        defaultValue={Products.description}
                        className="w-full min-h-[120px] border rounded-xl p-3"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="stock"
                        defaultChecked={Products.stock}
                    />
                    <label>In Stock</label>
                </div>

                <div className="flex gap-3">
                    <Link href="/products" className="w-full sm:w-auto">
                        <Button variant="secondary" className="w-full">
                            Cancel
                        </Button>
                    </Link>

                    <Button type="submit" className="w-full sm:w-auto">
                        Update
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default Editpage;