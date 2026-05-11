export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Shop Info */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-3">
                        MyShop
                    </h2>
                    <p className="text-sm leading-6">
                        Your trusted online shop for quality products at the best price.
                        We deliver fast and ensure customer satisfaction.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Products</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Contact</h3>
                    <p className="text-sm">Email: support@myshop.com</p>
                    <p className="text-sm">Phone: +880 1234 567 890</p>
                    <p className="text-sm">Location: Bangladesh</p>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} MyShop. All rights reserved.
            </div>
        </footer>
    );
}