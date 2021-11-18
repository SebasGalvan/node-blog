const  { Category } =  require('../models/index');


const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {

    async getCategories(req, res){

        if(req.query.category){
            await Category.findAll({ where: { description : {[Op.substring]:req.query.category}} })
                            .then(post => {
                                if(post){
                                    res.json(post)
                                }else{
                                    res.status(404).send({ not_found :"Category not found."})
                                }
                            }).catch(err => {
                                res.status(500).json(err);
                            });
        }else{
            let categorias =  await Category.findAll({limit: 20});
            res.json(categorias)
        }
        
    }
}