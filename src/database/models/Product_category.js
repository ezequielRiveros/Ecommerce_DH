module.exports = function(sequelize,DataTypes){
    const Product_category = sequelize.define("Product_category",{
        product_id_cat: {
            type: DataTypes.BIGINT(20),
            allowNull: false,
            references: {
                model: "Product",
                key:"id"
            }
        },
        category_id_prod: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: "Category",
                key:"id"
            }
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        deleted_at: {
            type: DataTypes.DATE
        }
    })

    return Product_category}