const Product = require('../models/product')



//Create new product => /api/v1/admin/product/new
exports.newProduct = async(req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}

// Get all products => /api/v1/products
exports.getProducts = async(req, res, next) => {

    const products = await Product.find();
    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

// Get single products details => /api/v1/product/:id
exports.getSingleProduct = async(req, res, next) => {

    const product = await Product.findById(req.params.id);
     
    if(!product) {
       
       return res.status(404).json({
         success: false,
         message: 'Product not Found'
       })
    }

    res.status(200).json({
        success: true,
        product
    })
    
}


// Update product => /api/v1/product/:id
exports.updateProduct = async(req, res, next) => {

    let product = await Product.findById(req.params.id);
     
    if(!product) {
       
           return res.status(404).json({
             success: false,
             message: 'Product not Found'
           })
    }
    
    product= await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
    
}

// Delete product => /api/v1/product/:id
exports.DeleteProduct = async(req, res, next) => {

    const product = await Product.findById(req.params.id);
     
    if(!product) {
       
           return res.status(404).json({
             success: false,
             message: 'Product not Found'
           })
    }
    
    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product is deleted'
    })
    
}