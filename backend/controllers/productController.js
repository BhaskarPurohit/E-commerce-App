const Product = require("../models/productModel")

// //create product
exports.createProduct = async(req, res, next)=>{

    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })

}

// export function getAllProducts(req, res){
//     res.status(200).json({message:"Route is working fine"})
// }

exports.getAllProducts = (req, res)=>{
    res.status(200).json({message:"Route is working fine"})
}