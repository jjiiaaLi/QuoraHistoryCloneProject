'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Question.belongsToMany(models.Tag, {
      through: 'QuestionTag',
      otherKey: 'questionId',
      foreignKey: 'tagId'
    })
  };
  return Question;
};
