const  { Cart, Product } = require("../models");

const getData = async (req, res) => {
    const carts = await Cart.findAll({
        where: {
            ip: req.ip,
            status: "ACTIVE",
        },
        attributes: ["productId", "qty"]
    });

    const products = await Product.findAll();

    if(carts !== null) {

        let productId = [];
        let qty = [];
        let userProducts = [];

        JSON.parse(JSON.stringify(carts)).map((cart) => {
            productId.push(cart.productId);
            qty.push(cart.qty);
        });

        JSON.parse(JSON.stringify(products)).map((product) => {
            for(let i = 0; i <= productId.length; i++) {
                if(product.id === productId[i]){
                    product.qty -= qty[i];
                }
            }
            userProducts.push(product);
        });

        return res.json({
            products: userProducts
        });
    }

    return res.json({
        products
    });
}
        // console.log(userProducts);


        // console.log(productId);
        // console.log(qty);
        // console.log(JSON.parse(JSON.stringify(products)));
                    // console.log(product.qty);
        // let carts = JSON.parse(JSON.stringify(rows));
            // console.log(productId.length)
            // for(let i = 0; i <= productId.length; i++) {
            //     if(product.id === productId[i]){
            //         product.qty -= qty[i];
            //     }
            //     // console.log(productId[i])
            // }
            // if(product.id === productId){
            //     console.log(productId.length)
            //     // product.qty -= qty;
            // }

        // console.log(JSON.parse(JSON.stringify(products)));

        // carts.map((cart) => {
            
        // });
        // const products = await Product.findAll({
        //     where: {
        //         firstName: { [Op.in]: ["Nathan", "Jane"] },
        //     },
        // });
        // return res.json({
        //     products
        // });


const addToCart = async(req, res, next) => {
    const { id } = req.body;
    const products = await Product.findByPk(id);
    const productsCountQty = JSON.parse(JSON.stringify(products.qty));

    const ip = await Cart.findAll({
        where: {
            ip: req.ip,
            status: "ACTIVE",
        },
    });

    if(ip !== null) {
        const { count, rows } = await Cart.findAndCountAll({
            where: {
                ip: req.ip,
                status: "ACTIVE",
                productId: id
            },
            include: [{
                model: Product,
                attributes: ["img", "name", "price", "qty"]
            }]
        });

        let carts = JSON.parse(JSON.stringify(rows));

        if(count !== 0) {
            let qty = 1;

            carts.map((row) => {
                qty += row.qty;
            });

            if(qty <= productsCountQty) {
                const data = {
                    qty,
                    ip: req.ip,
                    status: "ACTIVE"
                }
                await Cart.update(data, { 
                    where: {
                        productId: id
                    }
                });
                return res.json({
                    "message": "product is update",
                    "cart": carts
                });
            } else {
                return res.json({
                    "message": "product is not found",
                    "cart": carts
                });
            }

        } else {
            const cart = await new Cart();
            cart.productId = id;
            cart.qty = 1;
            cart.ip = req.ip;
            cart.status = "ACTIVE";
            cart.save();

            return res.json({
                "message": "product is new",
                "cart": carts
            });
        }
    } else {
        const cart = await new Cart();
        cart.productId = id;
        cart.qty = 1;
        cart.ip = req.ip;
        cart.status = "ACTIVE";
        cart.save();
        
        return res.json({
            "message": "cart is new",
            // "cart": carts
        });
    } 
        // const cart = await new Cart();
        // cart.productId = id;
        // cart.qty = 1;
        // cart.ip = req.ip;
        // cart.status = "ACTIVE";
        // cart.save();
        
        // const cart = await new Cart();
        // cart.productId = id;
        // cart.qty = 1;
        // cart.ip = req.ip;
        // cart.status = "ACTIVE";
        // cart.save();
        // }
        
        // const d = JSON.parse(JSON.stringify(ip));

        // console.log(cartId);

        // const cart = await new Cart();
        // cart.productId = id;
        // cart.qty = 1;
        // cart.ip = req.ip;
        // cart.status = "ACTIVE";
        // cart.save();



    // const cart = await new Cart();
    // cart.productId = id;
    // cart.qty = 1;
    // cart.ip = req.ip;
    // cart.status = "ACTIVE";
    // cart.save();
    
    // console.log(JSON.parse(JSON.stringify(cartId)));

    // if(cartId !== 0) {

    // } else {
    //     const cart = await new Cart();
    //     cart.product_id = id;
    //     cart.qty = 1;
    //     cart.phone_number = 1;
    //     cart.status = "ACTIVE";
    //     cart.save();
    // }

    // res.json({
    //     cart
    // })
};

const getCart = async (req, res, next) => {
    let cart = [];
    let total = 0;

    const carts = await Cart.findAll({
        where: {
            ip: req.ip
        },
        include: [{
            model: Product,
            attributes: ["img", "name", "price", "qty"]
        }]
    });

    JSON.parse(JSON.stringify(carts)).map((data) => {
        data.price = data.qty * data.Product.price;
        cart.push(data);
    });

    cart.map((c) => {
        total += c.price;
    })

    return res.json({
        cart,
        total
    })
}

const homeController = {
    getCart,
    getData,
    addToCart   
};

module.exports = homeController;
