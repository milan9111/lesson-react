import React, { useEffect, useState } from 'react';
import './ProductsGallery.css'

function ProductsGallery() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsList();
    }, [])

    const productsList = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setProducts(jsonData);
    }

    products.length = 6;

    return (
        <div className='products'>
            <div className='container'>
                {products.map(elem =>
                    <div className="box" key={elem.id}>
                        <img src={elem.image} alt={elem.description} title={elem.title} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductsGallery;