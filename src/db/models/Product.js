import sequelize from "../index.js";
import s from "sequelize";
const { DataTypes } = s;

const Product = sequelize.define("product", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER, // needs to be capital D in Data
        autoIncorrect: true
    },
    name: {
        type: DataTypes.TEXT,
        autoIncorrect: true
    },
    category: {
        type: DataTypes.TEXT,
        autoIncorrect: true
    },
    image: {
        type: DataTypes.TEXT,
        autoIncorrect: true
    },
    price: {
        type: DataTypes.DECIMAL,
        autoIncorrect: true
    }
})

export default Product;