import mongoose from 'mongoose';

const productSchema = new Schema({
    nameProduc: String,
    price: Number,
    stock : Number
});

//Creando el modelo

const ProductMDB = mongoose.model('Product',productSchema);

export default ProductMDB;
