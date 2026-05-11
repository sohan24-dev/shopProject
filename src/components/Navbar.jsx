import Link from "next/link";



const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">

            {/* Left side - Shop name */}
            <div className="text-xl font-bold text-gray-800">
                MyShop
            </div>

            {/* Right side - Buttons */}
            <div className="flex items-center gap-3">
                <Link href={'/'}><button className="cursor-pointer px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                    Home
                </button></Link>
                <Link href={"/products"}>
                    <button className="cursor-pointer px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                        All Products
                    </button>
                </Link>

                <Link href={'/addproducts'}>
                    <button className="cursor-pointer px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                        Add Product
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;