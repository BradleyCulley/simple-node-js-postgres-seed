module.exports = (sequelize, Sequelize) => {
  return sequelize.define("todo", {
    text: {
      type: Sequelize.STRING
    },
    is_done: {
      type: Sequelize.BOOLEAN
    }
  });
};
