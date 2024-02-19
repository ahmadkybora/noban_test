"use client";

import React, { useEffect, useState } from "react";
import getProducts from "@/services/productService";
import { addToCart, removeFromCart, getCart, sell } from "@/services/cartService";
import { z } from "zod";

export default function Home() {
  const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );

  const schema = z.object({
    phone: z.string().regex(phoneRegex, "Invalid Number!"),
  });

  const [products, setProducts] = useState();
  const [pay, setPay] = useState({
    phone_number: ""
  });

  const [carts, setCarts] = useState();

  const fetchProducts = async () => {
    const { products } = await getProducts();
    setProducts(products);
  };

  const fetchCarts = async () => {
    const carts = await getCart();
    setCarts(carts);
    localStorage.setItem("user", JSON.stringify(carts.cart));
  };

  useEffect(() => {
    fetchProducts();
    fetchCarts();
  }, []);

  const handleClick = (product: any) => {
    addToCart(product);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPay({
      ...pay,
      [e.target.name]: e.target.value,
    });
  };

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    // let payload = carts.cart.push(pay);
    // console.log(pay);
    // console.log(carts);
    await sell(pay);
    // console.log(carts);
    // pay(cart);
  };

  const handleRemove = async (cart: number) => {
    // console.log(cart);
    await removeFromCart(cart)
  }

  // console.log(carts)
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          {carts &&
            carts.cart.map((cart: any, index: number) => (
              <div className="container">
                <div className="col">
                  qty: {cart.qty} name: {cart.Product.name} price: {cart.price}{" "}
                  <a href="#" onClick={() => handleRemove(cart)}className="btn btn-danger">remove</a>
                </div>
              </div>
            ))}
          {carts && carts.total ? 
            <>
              <p>total: {carts && carts.total}</p>
              <form onSubmit={handlePay}>
                <input
                  type="number"
                  placeholder="enter your number"
                  name="phone_number"
                  value={pay.phone_number}
                  onChange={handleChange}
                />
                <button className="btn btn-primary">Pay</button>
              </form>
            </> : ""
          }
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {products &&
          products.map((product: any, index: number) => (
            <div key={index} className="card m-3" style={{ width: "18rem" }}>
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <p>discount: {product.discount}</p>
                <h5 className="card-title">{product.name}</h5>
                <p
                  style={{
                    backgroundColor: product.qty === 0 ? "red" : "green",
                  }}
                >
                  qty: {product.qty === 0 ? "not found" : product.qty}
                </p>
                <p className="card-text">price: {product.price}</p>
                {product.qty === 0 ? (
                  ""
                ) : (
                  <a
                    href="#"
                    onClick={() => handleClick(product)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// console.log(cart);
// if(cart !== null) {
//   // console.log(cart[0].ip);
//   localStorage.setItem("user", JSON.stringify(cart));
//   // console.log(localStorage.getItem);
//   setCarts(cart);
// }
// <>
//   <p>{cart.qty}</p>
//   <p>{cart.Product.name}</p>
// </>
// setCart(product);
// console.log(total);
