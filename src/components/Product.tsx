import React from "react";



import { useSelector } from "react-redux";
import { ProductItem } from "../../global";
import { store, add } from "../store";


const Product = () => {

    const products = useSelector((state: ProductItem[]) => state)
    return (
        <div>
            {
                products.map((product: ProductItem) => (
                <h1>{product.title}</h1>
                ))
            }
        </div>
    )
}

export { Product }