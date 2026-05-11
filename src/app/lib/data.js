export const getProducts = async () => {
    const res = await fetch('https://shop-server-3-h0tz.onrender.com/data');
    const data = await res.json();
    return data
}
export const getProductsDetails = async (id) => {
    const res = await fetch(`https://shop-server-3-h0tz.onrender.com/data/${id}`);
    const data = await res.json();
    return data
}