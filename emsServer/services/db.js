const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://amiya:serendipity@cluster0.mnwpqja.mongodb.net/ems')

const Employee = mongoose.model('Employee', {
    id:String,
    uname:String,
    age:String,
    desg:String,
    salary:Number

})

module.exports={
    Employee
}