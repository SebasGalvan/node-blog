
const express = require('express')
const router = express.Router()

const PostRoutes = require('./routes/PostRoutes')
const CategoryRoutes = require('./routes/CategoryRoutes')



const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : "Alkemy Challenge Warm Up",
            version: "1.0.0",
            description : "API Blog, utilizando Node y Express",
        },
        servers : [
            {
                url : 'http://localhost:3000'
            },
        ],
    },
    apis : [`${__dirname}/routes/*.js`]
};

const specs =  swaggerJsDoc(options);


router.use("/api-docs", swaggerUI.serve , swaggerUI.setup(specs))
router.use('/posts', PostRoutes)
router.use('/category', CategoryRoutes)



module.exports = router