'use strict';

const tableName = 'users'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          password: '8d3e7b320fb6c7995790e1da91e7c5af2129963f20a557f68836fb928c064f00',
          type: 1,
          email: 'kwc@gmail.com',
        },
        {
          id: 2,
          password: '8d3e7b320fb6c7995790e1da91e7c5af2129963f20a557f68836fb928c064f00',
          type: 1,
          email: 'wayne.chu@wegames.com.tw',
        },
        {
          id: 3,
          password: '8d3e7b320fb6c7995790e1da91e7c5af2129963f20a557f68836fb928c064f00',
          type: 2,
          email: 'paosong91@gmail.com',
          isSuspension: false,
        },
        {
          id: 4,
          password: '8d3e7b320fb6c7995790e1da91e7c5af2129963f20a557f68836fb928c064f00',
          type: 2,
          email: 'kwcstudio@gmail.com',
          isSuspension: false,
        },
        {
          id: 5,
          password: '8d3e7b320fb6c7995790e1da91e7c5af2129963f20a557f68836fb928c064f00',
          type: 2,
          email: 'ben.peng@wegames.com.tw',
          isSuspension: false,
        },
        {
          id: 6,
          password: '8d3e7b320fb6c7995790e1da91e7c5af2129963f20a557f68836fb928c064f00',
          type: 2,
          email: 'nick.huang@wegames.com.tw',
          isSuspension: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
