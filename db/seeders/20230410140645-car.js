"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Cars",
      [
        {
          id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
          name: "Toyota Avanza",
          type: "medium",
          sewahari: 200000,
          imgurl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681630279/car-api-challenge/ksvwadaz7zlgml5qre3y.jpg",
          createAt: new Date(),
          updateAt: new Date(),
        },
        {
          id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
          name: "Karimun Hijau",
          type: "small",
          sewahari: 100000,
          imgurl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681630380/car-api-challenge/qd5dnvcvtnu8rbdhqe0n.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "3206e974-c338-4230-95ca-2b3819fc5c65",
          name: "Chevrolet Kamaro",
          type: "medium",
          rentPerDay: 400000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681630424/car-api-challenge/vxiaxjfytgxumsslkuvy.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7ca9f8b7-a5c4-4866-a5d6-3c6cea151709",
          name: "Ferrari merah",
          type: "large",
          rentPerDay: 750000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681630462/car-api-challenge/xyv809xechzkvavuuqut.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "b46df6db-cbc0-4967-bb34-8018c516bc74",
          name: "Mazda white",
          type: "medium",
          rentPerDay: 275000,
          imgUrl:
            "https://res.cloudinary.com/dscsxprie/image/upload/v1681630772/car-api-challenge/kzjjtlxutfjvz3mlb2qt.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
