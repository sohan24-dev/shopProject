"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Surface, TextField } from "@heroui/react";

const AddProducts = ({ createProduct }) => {
    return (
        <div className="w-full flex justify-center px-4 py-8">
            <Surface
                variant="default"
                className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                        <Envelope className="size-5" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">Add Products</h2>
                        <p className="text-sm text-gray-500">
                            Fill in the product information
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form
                    action={createProduct}
                    className="flex flex-col gap-5"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TextField className="w-full" name="name" type="text">
                            <Label>Product Name</Label>
                            <Input placeholder="Enter product name" />
                        </TextField>

                        <TextField className="w-full" name="category" type="text">
                            <Label>Category</Label>
                            <Input placeholder="Enter category" />
                        </TextField>

                        <TextField className="w-full" name="brand" type="text">
                            <Label>Brand</Label>
                            <Input placeholder="Enter brand name" />
                        </TextField>

                        <TextField className="w-full" name="price" type="number">
                            <Label>Price</Label>
                            <Input placeholder="Enter product price" />
                        </TextField>

                        <TextField className="w-full" name="quantity" type="number">
                            <Label>Quantity</Label>
                            <Input placeholder="Enter quantity" />
                        </TextField>

                        <TextField className="w-full" name="made_in" type="text">
                            <Label>Made In</Label>
                            <Input placeholder="Enter country name" />
                        </TextField>
                    </div>

                    <TextField className="w-full" name="img" type="url">
                        <Label>Image URL</Label>
                        <Input placeholder="Enter image url" />
                    </TextField>

                    <TextField className="w-full" name="description">
                        <Label>Description</Label>
                        <Input
                            placeholder="Enter product description"
                            className="min-h-[100px]"
                        />
                    </TextField>

                    <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="stock"
                            id="stock"
                            className="w-4 h-4"
                        />
                        <label
                            htmlFor="stock"
                            className="text-sm sm:text-base"
                        >
                            In Stock
                        </label>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4">
                        <Button variant="secondary">
                            Cancel
                        </Button>

                        <Button type="submit">
                            Add Products
                        </Button>
                    </div>
                </form>
            </Surface>
        </div>
    );
};

export default AddProducts;