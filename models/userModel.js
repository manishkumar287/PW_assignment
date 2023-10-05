import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    name: String,
    salary: Number,
    currency: String,
    department: String,
    on_contract: Boolean,
    sub_department: String
})

const User=mongoose.model('User',userSchema);

export default User;