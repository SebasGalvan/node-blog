
const image = (req, res, next) => {
    try {
        const { image } = req.body
        const regex = /^.*\.(jpg|png|jpeg)$/gi
        if(!regex.test(image))
        {
            res.status(400).json({error: 400 ,msg: "Only images (.jpg|.png|.jpeg) are allowed!"})
            throw new Error();
        }
        next()
    } catch (err) {
        next(err)

}
}


module.exports ={
    image
}