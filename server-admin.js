const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const https = require("https")
const fs = require("fs")

const { MongoClient } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;
const dburl = "mongodb+srv://vivekdgrt:Pintu090703@cluster0.qxivjzg.mongodb.net/?retryWrites=true&w=majority";

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())

const certificates = {
    key: fs.readFileSync('./certificates/certificate.key'),
    cert: fs.readFileSync('./certificates/certificate.pem')
}

app.use(express.static(path.resolve('admin', 'build')));
app.get("/", (req, res) => {
    res.sendFile(path.resolve('admin', 'build', 'index.html'))
})

app.post("/adminLogin", (req, res) => {
    if(req.body.username === "ninJajji" && req.body.password === "@122Thullu")
        res.json({valid: true})
    else
        res.json({valid: false})
})

app.post("/viewTeams", async (req, res) => {
    const client = new MongoClient(dburl)
    try {
        const db = client.db("Tournament")
        const Applicants = db.collection("Applicants")
        Teams = await Applicants.find({}).toArray()
        res.status(200).json({data: Teams})
    } catch (error) {
        console.log("Error in /viewTeams: ", error)
        res.status(500)
    }
    finally{
        await client.close()
    }
})

app.post("/confirmPayment", async (req, res) => {
    const client = new MongoClient(dburl)
    try {
        const db = client.db("Tournament")
        const Applicants = db.collection("Applicants")
        Player = await Applicants.updateOne({_id: new ObjectId(req.body._id)}, {$set: {payment_status: req.body.status}})
        res.status(200).json({success: `Player payment ${req.body.status}`})
    } catch (error) {
        console.log("Error in /confirmPayment: ", error)
        res.status(500).json({success: "Player payment update failed"})
    }
    finally{
        await client.close()
    }
})

app.get("*", (req, res) => {
    res.redirect("/")
})

https.createServer(certificates, app).listen(443, () => {
    console.log("Server running on port 443")
})

// app.listen(4000, () => {
//     console.log("Server listening on port 4000")
// })