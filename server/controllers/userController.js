const User = require('../models/user');

module.exports ={
    getUsers: async(req, res) => {
        try{
            const users = await User.find({});
            res.json(users);
        }catch(error){
            res.status(500).json({error:error.message})
        }
    },

    createUsers:async(req, res) => {
        try{
            const user = new User(req.body);
            await user.save()
        }catch(error){
            res.status(500).json({error:error.message})       
        }
    },

    updateUser:async(req, res) => {
        try{
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            if(!user){
                res.status(404).json({error:'User not found'})
            }else{
                res.json(user)
            }
        }catch(error){
        res.status(500).json({error:error.message})
        }
    },

    deleteUser:async(req, res) => {
        try{
            const user = await User.findByIdAndRemove(req.params.id);
            if(!user){
                res.status(404).json({error:'User not found'})
            }else{
                res.json({user})
            }
        }catch(error){
            res.status(500).json({error:error.message})
        }
    }
}