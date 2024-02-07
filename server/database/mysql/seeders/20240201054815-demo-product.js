'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      { 
        name: "x11",
        price: "1200",
        img: "s",
        qty: "3",
        product_code: "1001",
        discount: "10",
        createdAt: "2024-01-31 14:06:33",
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x12",
        price: "1350",
        img: "s",
        qty: "1",
        product_code: "1002",
        discount: "0", 
        reatedAt: "2024-01-31 14:06:33", 
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x13",
        price: "1150",
        img: "s",
        qty: "8",
        product_code: "1003",
        discount: "25",
        createdAt: "2024-01-31 14:06:33",
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x14",
        price: "1150",
        img: "s",
        qty: "5",
        product_code: "1004",
        discount: "10",
        createdAt: "2024-01-31 14:06:33",
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x15",
        price: "1650",
        img: "s",
        qty: "8",
        product_code: "1005",
        discount: "0", 
        reatedAt: "2024-01-31 14:06:33", 
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x16",
        price: "1100",
        img: "s",
        qty: "4",
        product_code: "1006",
        discount: "50",
        createdAt: "2024-01-31 14:06:33",
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x17",
        price: "1250",
        img: "s",
        qty: "9",
        product_code: "1007",
        discount: "0", 
        reatedAt: "2024-01-31 14:06:33", 
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x18",
        price: "1520",
        img: "s",
        qty: "6",
        product_code: "1008",
        discount: "0", 
        reatedAt: "2024-01-31 14:06:33", 
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x19",
        price: "1900",
        img: "s",
        qty: "9",
        product_code: "1009",
        discount: "10",
        createdAt: "2024-01-31 14:06:33",
        updatedAt: "2024-01-31 14:06:33"
      },
      { 
        name: "x20",
        price: "1000",
        img: "s",
        qty: "5",
        product_code: "1010",
        discount: "25",
        createdAt: "2024-01-31 14:06:33",
        updatedAt: "2024-01-31 14:06:33"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
