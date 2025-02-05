module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        email:{
            type:DataTypes.STRING(15),
            allowNULL: false,
            unique:true
        },
        pw:{
            type:DataTypes.STRING(100),
            allowNULL: false
        }},
        {
            freezeTableName: true
        })
};