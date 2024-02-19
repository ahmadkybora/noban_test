export async function getCart() {
    const response = await fetch("http://localhost:8000/get-cart");
    if(response.ok) {
        return await response.json();
    };
}

export async function addToCart(product: any) {
    const response = await fetch("http://localhost:8000/add-to-cart",
        {
            body: JSON.stringify(product),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
    if(response.ok) {
        return response;
    };
}

export async function removeFromCart(product: any) {
    const response = await fetch("http://localhost:8000/remove-from-cart",
        {
            body: JSON.stringify(product),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
    if(response.ok) {
        return response;
    };
}

export async function sell(pay: any) {
    // Object.keys(carts).map((cart: any) => {
    //     console.log(cart);
    // })
    // console.log(carts);
    // console.log(pay);
    const response = await fetch("http://localhost:8000/pay",
        {
            body: JSON.stringify(pay),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
    if(response.ok) {
        return response;
    };
}
