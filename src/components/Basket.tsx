import React from "react"
import { useSelector } from "react-redux"
import { ProductItem } from "../../global"
import { store, remove } from "../store";


const Basket = () => {

    const products = useSelector((state: ProductItem[]) => state)
    return (
        <div>
          <h3>You have {products.filter(product => product.added).length} items in your basket</h3>  
        </div>
    )
}

export { Basket }


