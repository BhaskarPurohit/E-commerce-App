const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please enter product Name"]
    },
    description:{
        type: String,
        required:[true, "Please enter product Description"]
    },
    price:{
        type: Number,
        required:[true, "Please enter product Price"],
        maxLength: [8, "Price can not exceed 8 figure"]
    },
    rating:{
        type: Number,
        default:0,

    },
    images:[
        {
            public_id:{
                type: String,
                required: true
            },
        
             url:{
            type: String,
            required: true 
             }
        }
    ],
    category:{
        type: String,
        required: [true, "Please enter product Category"],
        

    },
    Stock:{
        type: Number,
        required:[true, "Please enter product stock"],
        maxLength:[4,"Stock can not exceed 4 characters"],
        default: 1
    },
    reviews:[
        {
            name:{
                type: String,
                required: true 
            },
            rating:{
                type: Number,
                required: true 
            },
            comment:{
                type: String,
                required: true 
            }
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("Product",productSchema)