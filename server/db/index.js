const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/crudlogin")
.then(()=> {
  console.log('db is connected')
}).catch((ex) => {
  console.log('db connection is failed:', ex)
})