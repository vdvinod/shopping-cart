import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from "../models/productModel.js"

const Router = express.Router()

// @Desc Fetch All Product
//@Route Get /api/Product
// @access Public
Router.get('/',asyncHandler(async (req, res) => {
    const products =  await Product.find({})
    res.json(products)
}))

// @Desc Fetch Product By Id
//@Route Get /api/Product/:id
// @access Public
Router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('product not found')
    }
    
}))

export default Router