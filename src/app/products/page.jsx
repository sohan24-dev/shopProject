import Products from "@/components/Products";
import { getProducts } from "../lib/data";


const ProductsPage = async () => {
    const data = await getProducts()
    // console.log(data);
    return (

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {
                data.map(productall => <Products key={productall._id} productall={productall}></Products>)
            }
        </div>
    );
};

export default ProductsPage;