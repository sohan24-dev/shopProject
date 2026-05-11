import AddProducts from '@/components/addproduct';
import React from 'react';
import { createProduct } from '../lib/action';

const Addpro = () => {
    return (
        <AddProducts createProduct={createProduct}></AddProducts>
    );
};

export default Addpro;