const { getAll, create, getOne, remove, update, login, logged, setPosts } = require('../controllers/user.controllers')
const express = require('express')
const { verifyJwt } = require('../utils/verifyJwt')

const routerUser = express.Router()

routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create)

routerUser.route('/me')
    .get(verifyJwt, logged)

routerUser.route('/:id/post')
    .post(verifyJwt, setPosts)

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update)


routerUser.route('/login')
    .post(login)

module.exports = routerUser