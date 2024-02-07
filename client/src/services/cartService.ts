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

export async function pay(cart: any) {
    const response = await fetch("http://localhost:8000/pay",
        {
            body: JSON.stringify(cart),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
    if(response.ok) {
        return response;
    };
}
