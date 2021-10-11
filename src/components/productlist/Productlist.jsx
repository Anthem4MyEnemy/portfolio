import React from 'react'
import "./productlist.css";
import Product from "../product/Product";
import { products } from '../../data';

const Productlist = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title" >Create and Inspire by Dietrich</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorem quaerat facilis amet minus. Explicabo ex ipsa quisquam minus culpa impedit molestiae ab, eveniet consequatur id a at corrupti maxime?
                </p>
            </div>

            <div className="pl-list">
                {products.map(item => (
                    <Product img={item.img} key={item.id} link={item.link}/>
                ))}
                
            </div>
            
        </div>
    )
}

export default Productlist
