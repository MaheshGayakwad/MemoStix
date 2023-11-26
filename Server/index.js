import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Item from  "./NoteModel.js"


const app = express();




app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI);


app.get('/', (req, res) => {
  res.send('Hello');
});


app.get("/get" , async (req,res)=>{
        
        try {
            
            const notes = await Item.find({});
            res.json(notes);
             
        } catch (error) {
            console.log(error);
        }


});

app.post("/add" , async (req,res)=>{

    const notes = req.body.notes;
   
   
 
    try {
        const inserting =  await Item.create({
            title: notes.title,
            content: notes.content,
            
        });
        res.json(inserting);
     } catch (error) {
        console.log(error);
      }
  

});


app.delete("/deleteRoute/:id" , async (req,res)=>{

        const {id} = req.params;
        
        
      try {
        const deleteData =   await Item.findByIdAndDelete({_id:id});
       
        res.json(deleteData);
      } catch (error) {
        console.log(error);
      }

});

app.put("/update/:id" , async (req,res)=>{

      const id  = req.params.id;
      console.log(id);

      try {
          const updated = await Item.findByIdAndUpdate(id , [{$set:{cross:{$eq:[false,"$cross"]}}}]);
          res.json(updated);
          
      } catch (error) {
        console.log(error);
      }

} );


app.listen(3000 , (req,res)=>{

        console.log("Running on port 3000");

});

