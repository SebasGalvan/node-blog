const  { Post , Category } =  require('../models/index');

module.exports = {

    async getPosts(req, res){
        let posts =  await Post.findAll(
            {
                limit: 20,
                order : [['createdAt','DESC']],
                include : [{model: Category, attributes : ['description']}], 
                attributes: {exclude: ['content', 'categoryId','CategoryId']},
            
            }
        );
        res.json(posts)
    },

    async getPost(req, res){
        try{

            if(isNaN(req.params.id)){throw new Error()};
                await Post.findByPk(req.params.id,{
                    include : [{model: Category, attributes : ['description']}], 
                    attributes: {exclude: ['content', 'categoryId','CategoryId']},
                })
                            .then(post => {
                                if(post){
                                    res.json(post)
                                }else{
                                    res.status(404).send({ not_found :"Post not found."})
                                }
                            }).catch(err => {
                                res.status(500).json(err);
                            });
        }
        catch{
            res.status(500).json({error:"The parameter {id} must be a number." })
        }
        
    },
    async setPost(req, res){
        await Post.create({
            image: req.body.image,
            title: req.body.title,
            content: req.body.content,
            }).then(post => {
                res.status(201).json(post);
            }).catch((err)=> {
                res.status(500).json(err)
            });
    },
    async updatePost(req, res, next){

        try{
                if(isNaN(req.params.id)){throw new Error()};

                await Post.findByPk(req.params.id).then((post)=>{
                    if(post !== null){
                        Post.update(
                            {
                                image: req.body.image ?? post.image,
                                title: req.body.title ?? post.title,
                                content: req.body.content ?? post.contentr,
                                categoryId : req.body.categoryId ?? post.categoryId

                            },  {
                                where: {id : req.params.id}
                                }
                            ).then(post => {
                                res.status(200).json({msg : "The post was successfully modified."})
                            }).catch(err => {
                                res.status(500).json(err)
                            });
                    }else{
                        res.json({info : "The post you want to modify does not exist"})
                    }
                })}
        catch{
            res.status(500).json({error:"The parameter {id} must be a number." })
        }
    },
    async deletePost(req, res){

        try{
            if(isNaN(req.params.id)){throw new Error()};

                    Post.findByPk(req.params.id).then((post)=>{
                    if(post !== null){
                            Post.destroy({
                                where : {id : req.params.id}
                            }).then(()=>{
                                res.status(200).json({ success : `Post with id: ${req.params.id} has been removed successfully.`})
                            }).catch(err => {
                                res.status(500).json(err)

                            });
                    }else{
                        res.status(404).json({info: `The post with id: ${req.params.id}, does not exist.`})
                    }
                })
        }
        catch{
            res.status(500).json({error:"The parameter {id} must be a number." })
        }
        


    },
}