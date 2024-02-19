const { Cart, Product } = require("../models");
const Sequelize = require("sequelize");

const getData = async (req, res) => {
  const products = await Product.findAll();
  const { rows, count } = await Cart.findAndCountAll({
    where: {
      ip: req.ip,
      status: "ACTIVE",
    },
  });

  if (count !== 0) {
    let productId = [];
    let qty = [];
    let userProducts = [];

    JSON.parse(JSON.stringify(rows)).map((row) => {
      productId.push(row.productId);
      qty.push(row.qty);
    });

    JSON.parse(JSON.stringify(products)).map((product) => {
      for (let i = 0; i <= productId.length; i++) {
        if (product.id === productId[i]) {
          product.qty -= qty[i];
        }
      }
      userProducts.push(product);
    });

    return res.json({
      products: userProducts,
    });
  }

  return res.json({
    products,
  });
};

const addToCart = async (req, res, next) => {
  const { id } = req.body;
  const products = await Product.findByPk(id);
  const productsCountQty = JSON.parse(JSON.stringify(products.qty));

  const { count } = await Cart.findAndCountAll({
    where: {
      ip: req.ip,
      status: "ACTIVE",
    },
  });

  if (count !== 0) {
    const { count, rows } = await Cart.findAndCountAll({
      where: {
        ip: req.ip,
        status: "ACTIVE",
        productId: id,
      },
    });
    let carts = JSON.parse(JSON.stringify(rows));

    if (count !== 0) {
      let qty = 1;

      carts.map((row) => {
        qty += row.qty;
      });

      if (qty <= productsCountQty) {
        const data = {
          qty,
          ip: req.ip,
          status: "ACTIVE",
        };
        await Cart.update(data, {
          where: {
            productId: id,
            status: "ACTIVE",
          },
        });

        const { rows } = await Cart.findAndCountAll({
          where: {
            ip: req.ip,
            status: "ACTIVE",
          },
          attributes: ["qty"],
          include: [
            {
              model: Product,
              attributes: ["img", "name", "price", "qty"],
            },
          ],
        });

        let carts = JSON.parse(JSON.stringify(rows));

        return res.json({
          message: "product is update",
          cart: carts,
        });
      } else {
        const { rows } = await Cart.findAndCountAll({
          where: {
            ip: req.ip,
            status: "ACTIVE",
          },
          attributes: ["qty"],
          include: [
            {
              model: Product,
              attributes: ["img", "name", "price", "qty"],
            },
          ],
        });

        let carts = JSON.parse(JSON.stringify(rows));

        return res.json({
          message: "product is not found",
          cart: carts,
        });
      }
    } else {
      const cart = new Cart();
      cart.productId = id;
      cart.qty = 1;
      cart.ip = req.ip;
      cart.status = "ACTIVE";
      await cart.save();

      const { rows } = await Cart.findAndCountAll({
        where: {
          ip: req.ip,
          status: "ACTIVE",
        },
        attributes: ["qty"],
        include: [
          {
            model: Product,
            attributes: ["img", "name", "price", "qty"],
          },
        ],
      });

      let carts = JSON.parse(JSON.stringify(rows));

      return res.json({
        message: "product is new",
        cart: carts,
      });
    }
  } else {
    const cart = new Cart();
    cart.productId = id;
    cart.qty = 1;
    cart.ip = req.ip;
    cart.status = "ACTIVE";
    await cart.save();

    const { rows } = await Cart.findAndCountAll({
      where: {
        ip: req.ip,
        status: "ACTIVE",
      },
      attributes: ["qty"],
      include: [
        {
          model: Product,
          attributes: ["img", "name", "price", "qty"],
        },
      ],
    });

    let carts = JSON.parse(JSON.stringify(rows));

    return res.json({
      message: "cart is new",
      cart: carts,
    });
  }
};

const getCart = async (req, res, next) => {
  let cart = [];
  let total = 0;

  const carts = await Cart.findAll({
    where: {
      ip: req.ip,
      status: "ACTIVE",
    },
    attributes: ["id", "qty"],
    include: [
      {
        model: Product,
        attributes: ["img", "name", "price", "qty"],
      },
    ],
  });

  JSON.parse(JSON.stringify(carts)).map((data) => {
    data.price = data.qty * data.Product.price;
    cart.push(data);
  });

  cart.map((c) => {
    total += c.price;
  });

  return res.json({
    cart,
    total,
  });
};

const removeFromCart = async (req, res, next) => {
  const { id } = req.body;
  const { rows, count } = await Cart.findAndCountAll({
    where: {
      ip: req.ip,
      status: "ACTIVE",
      id,
    },
  });

  let carts = JSON.parse(JSON.stringify(rows));

  if (count !== 0) {
    let qty = 1;

    carts.map((row) => {
      qty = row.qty - qty;
    });

    if (qty !== 0) {
      await Cart.update(
        {
          qty,
        },
        {
          where: {
            id,
          },
        }
      );

      const { rows } = await Cart.findAndCountAll({
        where: {
          ip: req.ip,
          status: "ACTIVE",
        },
        attributes: ["qty"],
        include: [
          {
            model: Product,
            attributes: ["img", "name", "price", "qty"],
          },
        ],
      });

      let carts = JSON.parse(JSON.stringify(rows));

      return res.json({
        message: "reduce from cart",
        cart: carts,
      });
    } else {
      await Cart.destroy({
        where: {
          id,
        },
      });

      const { rows } = await Cart.findAndCountAll({
        where: {
          ip: req.ip,
          status: "ACTIVE",
        },
        attributes: ["qty"],
        include: [
          {
            model: Product,
            attributes: ["img", "name", "price", "qty"],
          },
        ],
      });

      let carts = JSON.parse(JSON.stringify(rows));

      return res.json({
        message: "remove from cart",
        cart: carts,
      });
    }
  } else {
    return res.json({
      message: "product on cart is not found",
    });
  }
};

const pay = async (req, res, next) => {
  const { phone_number } = req.body;
  const { count, rows } = await Cart.findAndCountAll({
    where: {
      ip: req.ip,
      status: "ACTIVE",
    },
  });

  let pay = JSON.parse(JSON.stringify(rows));

  if (count !== 0) {
    pay.map(async (p) => {
      await Cart.update(
        {
          qty: p.qty,
          ip: p.ip,
          status: "PAID",
          phone_number,
        },
        {
          where: {
            id: p.id,
          },
        }
      );
      await Product.update(
        {
          qty: Sequelize.literal(`qty - ${p.qty}`),
        },
        {
          where: {
            id: p.productId,
          },
        }
      );
    });
  }
};

const homeController = {
  getCart,
  getData,
  addToCart,
  removeFromCart,
  pay,
};

module.exports = homeController;
