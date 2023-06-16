const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aswathykumpalathu:pulser2015@employeedb.yyw1acm.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB Connection established')
})
.catch(err=>
    console.log('connection failed')
)