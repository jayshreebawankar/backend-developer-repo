const mongoose = require('mongoose')
const user = require('../model/userSchema')

const createUser = async (req, res, next)=>{
    try{
        const {name, email, mobile, password} = req.body;
        
        if(!name || !email || !mobile || !password){
            res.json({alert: "Please Fill the Data"})
        }

        const result = await user.findOne({email:email})
        
        if(result){
            return res.json({info: "This email is already registered"})
        }

        const data = new user({
            name, email, mobile, password
        })
        console.log(data);
        const saving = await data.save();
        // console.log(sav);
        if(saving){
            return res.status(201).json(req.body);   
        }else{
            return res.send("Please try again")
        }
    }
    catch{(error)=>{
        console.log(error);
    }}
}

const getUserData = async(req, res, next) =>{
    const data = await user.find()
    // console.log(data);
    if(data){
        res.json(data)
    }else{
        return res.status(404).json("Error occurred while getting the data...")
    }
}

const getUserDataByID = async(req, res, next) => {
    const getData = req.params.id;
    console.log(getData);

    const data = await user.findById(id)
    console.log(data);
    // if(data){
    //     return res.json(data)
    // }else{
    //     res.status(404).json({Error : 'Entered ID data does not exist....'})
    // }
}



// const getUserDataByID
exports.createUser = createUser;
exports.getUserData = getUserData;
exports.getUserDataByID = getUserDataByID;