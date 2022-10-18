const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all users
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM user_info", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one user
app.get("/api/getFromId/:UserID", (req,res)=>{

const UserID = req.params.UserID;
 db.query("SELECT * FROM user_info WHERE UserID = ?", UserID, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the user
app.post('/api/create', (req,res)=> {

const username = req.body.userName;
const title = req.body.title;
const text = req.body.text;
/*
const firstName = req.body.firstName;
const lastName = req.body.lastName;
const sport = req.body.sport;
const email = req.body.email;
const gender = req.body.gender;
const experience = req.body.experience;
*/

db.query("INSERT INTO user_info (title, post_text, user_name) VALUES (?,?,?)",[title,text,username], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// Route to like a post
app.post('/api/like/:UserID',(req,res)=>{

const UserID = req.params.UserID;
db.query("UPDATE user_info SET Likes = Likes + 1 WHERE UserID = ?",UserID, (err,result)=>{
    if(err) {
   console.log(err)   } 
   console.log(result)
    });    
});

// Route to delete a post

app.delete('/api/delete/:UserID',(req,res)=>{
const UserID = req.params.UserID;

db.query("DELETE FROM user_info WHERE UserID= ?", UserID, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ＄{PORT}`)
})
