const catchError = require('../utils/catchError')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')


// 🔐 Private Route
const getAll = catchError(async(req, res) => {
    const results = await User.findAll({ include: [Post] })
    return res.json(results)
})


// 🌍 Public route
const create = catchError(async(req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    const newUser = {
        ...req.body,
        password: hashedPassword
    }

    const result = await User.create(newUser)
    return res.status(201).json(result)
})

// 🔐 Private Route
const getOne = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id, { include: [Post] })
    if(!result) return res.sendStatus(404)
    return res.json(result)
})

// 🔐 Private Route
const remove = catchError(async(req, res) => {
    const { id } = req.params
    const result = await User.destroy({ where: {id} })
    if(!result) return res.sendStatus(404)
    return res.sendStatus(204)
})

// 🔐 Private Route
const update = catchError(async(req, res) => {
    const { id } = req.params
    
    delete req.body.password
    delete req.body.email
    
    const result = await User.update(
        req.body,
        { where: {id}, returning: true }
    )
    if(result[0] === 0) return res.sendStatus(404)
    return res.json(result[1][0])
})

// 🌍 Public route
const login = catchError(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
        return res.sendStatus(401)
    }

    const isValid = bcrypt.compareSync(password, user.password)
    if (!isValid) {
        return res.sendStatus(401)
    }

    delete user.dataValues.password

    const token = jwt.sign(
        { user }, 
        process.env.TOKEN_SECRET, 
        { expiresIn: '2d' }
    )

    res.status(201).json({
        user, token
    })

})

// 🔐 Private Route
const logged = catchError(async (req, res) => {
    const user = req.user    
    return res.status(200).json(user)
})

// 🔐 Private Route
const setPosts = catchError(async (req, res) => {
    const { id } = req.params 

    const user = await User.findByPk(id)
    if(!user) return res.sendStatus(404)

    await user.setPosts(req.body)

    const posts = await user.getPosts()
    return res.status(200).json(posts)
})
    

    


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login,
    logged,
    setPosts
}