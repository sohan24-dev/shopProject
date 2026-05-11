import Image from "next/image";

export default function Banner() {
    return (
        <section className="w-full bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">

                {/* Left Content */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Welcome to <span className="text-blue-600">MyShop</span>
                    </h1>

                    <p className="mt-4 text-gray-600 text-base md:text-lg">
                        Discover the best products at unbeatable prices. Shop smart, shop fast, and enjoy quality delivery right to your door.
                    </p>

                    <div className="mt-6 flex gap-3">
                        <button className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Shop Now
                        </button>

                        <button className="px-5 py-3 border border-gray-400 rounded-lg hover:bg-gray-200 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <Image
                        src="https://i.ibb.co.com/DfHs11j8/alexas-fotos-online-shopping-1082728-1920.jpg"
                        alt="Shopping Banner"
                        width={1000}
                        height={600}
                        className="w-full h-auto rounded-2xl shadow-lg object-cover"
                    />
                </div>

            </div>
        </section>
    );
}