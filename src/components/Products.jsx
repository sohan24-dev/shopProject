import { Card, CardFooter } from "@heroui/react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import DeleteAlart from "./DeleteAlart";
import { deleteproduct } from "@/app/lib/action";

const Products = ({ productall }) => {
    const product = productall;

    return (
        <div className="flex justify-center p-4 sm:p-6">
            <Card className="w-full max-w-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-100 border border-gray-200">

                {/* Image */}
                <div className="relative w-full h-[220px] sm:h-[240px]">
                    <Image
                        src={product.img}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1">
                        {product.name}
                    </h2>

                    <p className="text-emerald-600 font-bold text-xl sm:text-2xl">
                        ${product.price}
                    </p>

                    <p className="text-sm text-gray-500 leading-relaxed">
                        {product.description?.slice(0, 80)}...
                    </p>

                    <p className="text-xs text-gray-400">
                        Made in: {product.made_in}
                    </p>
                </div>

                {/* Footer */}
                <CardFooter className="flex flex-col sm:flex-row gap-3 p-4 bg-white/70 backdrop-blur-md">

                    <Link href={`/products/${product._id}`}>
                        <Button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
                            variant="solid"
                        >
                            Details
                        </Button>
                    </Link>


                    <DeleteAlart deleteproduct={deleteproduct} product={product}></DeleteAlart>


                </CardFooter>
            </Card>
        </div>
    );
};

export default Products;