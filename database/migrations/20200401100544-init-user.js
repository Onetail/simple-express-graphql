'use strict';

const tableName = "users";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, TINYINT } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        id: { type: STRING(128), primaryKey: true },
        coverId: { type: INTEGER },
        password: STRING(256),
        email: STRING(128),
        isSuspension: TINYINT(1),
        type: TINYINT(1),
        createdAt: {
          type: DATE,
          defaultValue: Sequelize.literal('NOW()'),
        },
        updatedAt: {
          type: DATE,
          defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()'),
        },
      },
      {
        charset: 'utf8', // default: null
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  }
};
