import { getProductsDetails } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";


const ProductsDetailsPage = async ({ params }) => {
    const { id } = await params
    // console.log(id);
    const product = await getProductsDetails(id)
    // console.log(product);
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10">

            <div className="max-w-6xl mx-auto p-4">

                <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

                    <div className="flex flex-col md:flex-row gap-6 p-5">

                        {/* IMAGE */}
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                            <Image
                                src={product.img}
                                alt={product.name}
                                width={600}
                                height={600}
                                className="w-full max-h-[400px] object-contain rounded-xl"
                            />
                        </div>

                        {/* DETAILS */}
                        <div className="w-full md:w-1/2 space-y-4">

                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {product.name}
                            </h1>

                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {product.description}
                            </p>

                            {/* INFO */}
                            <div className="grid grid-cols-2 gap-3 text-sm bg-gray-50 p-4 rounded-xl">

                                <p><span className="font-semibold">Category:</span> {product.category}</p>

                                <p><span className="font-semibold">Brand:</span> {product.brand}</p>

                                <p><span className="font-semibold">Price:</span> ${product.price}</p>

                                <p><span className="font-semibold">Quantity:</span> {product.quantity}</p>

                                <p>
                                    <span className="font-semibold">Stock:</span>{" "}
                                    {product.stock ? "Available" : "Out of Stock"}
                                </p>

                                <p><span className="font-semibold">Made In:</span> {product.made_in}</p>

                            </div>

                            {/* BUTTON */}
                            <Link href={`/products/${id}/edit`}><button className="cursor-pointer w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
                                Edit Products
                            </button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsPage;