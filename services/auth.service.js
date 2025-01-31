const {Role, User} = require('../models/index');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (data) =>{
    try{
        const user = await User.create({
            username: data.username,
            email: data.email,
            password: data.password,
        })
       // const user = await User.findByPk(userData.id);
        const customerRole = await Role.findOne({
            where:{
                name: 'customer'
            }
        });
        //assigning the role of customer by default
        await user.addRole(customerRole);
        return user;
    }
    catch(err){
        console.log(err);
    }
}

const getUserByEmail = async (data) =>{
    const response = await User.findOne({
        where:{
            email:data
        }
    });
    return response;
}

const verifyPassword = (password, hashedPassword) =>{
    return bcrypt.compareSync(password, hashedPassword);
}

const verifyToken = (token) =>{
    try{
        const response = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return response;
    }catch(err){
        console.log(err);
    }
}

module.exports = {signup, getUserByEmail, verifyPassword, verifyToken};