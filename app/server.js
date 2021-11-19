const express =  require('express');
const app = express();
const { sequelize } =  require('./models/index');

const cors =  require('cors');
app.use(cors())



const PORT = process.env.PORT || 3000;

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(require('./index'))

app.listen(PORT, function(){
    console.log(`Aplicacion corriendo en http://127.0.0.1:${PORT}`);


    sequelize.authenticate().then(()=>{
        console.log("Conectado a la base de datos.");
    })
})