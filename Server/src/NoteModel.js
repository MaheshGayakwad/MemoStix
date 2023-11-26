import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    cross : {
      type : Boolean,
      default : false
    }
   
  });
  
  const Item = mongoose.model('Item', noteSchema);
  
  export default Item;