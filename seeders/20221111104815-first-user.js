"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Henrique Bagatini",
          username: "hbagatini",
          email: "henriquebagatini@hotmail.com",
          password: bcrypt.hashSync("123456", 10),
          birthday: new Date(2000, 12, 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
