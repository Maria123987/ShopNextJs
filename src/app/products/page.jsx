'use client'

import { useState, useEffect } from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let productList = await fetch('https://dummyjson.com/products');
        if (!productList.ok) {
            throw new Error('API Call Failed due to unknown reason');
        }
        productList = await productList.json();
        setProducts(productList.products);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='container'>
            <h2 className="text-center mt-5">Our Products</h2>
            {
                products.map((product) => {
                    return <div key={product.id}>
                        <p>product Title: {product.title}</p>
                        <p>product Title: {product.price}</p>
                        <hr />
                    </div>
                })
            }
        </div>
    )
}

export default Products