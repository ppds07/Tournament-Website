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

app.use(express.static(path.resolve('application', 'build')));
app.get("/", (req,res) => {
    res.sendFile(path.resolve('application', 'build', 'index.html'))
})

app.get("/privacy-policy", (req, res) => {
    res.sendFile(path.resolve("policies", "privacy-policy.html"))
})

app.get("/terms-and-conditions", (req, res) => {
    res.sendFile(path.resolve("policies", "terms-and-conditions.html"))
})

app.get("/return-policy", (req, res) => {
    res.sendFile(path.resolve("policies", "return-policy.html"))
})

app.get("/rules", (req, res) => {
    res.sendFile(path.resolve("policies", "rules.pdf"))
})

app.post("/findOrAdd", async (req, res) => {
    const client = new MongoClient(dburl);
    var Person = {}
    try {
        const db = client.db("Tournament")
        const Applicants = db.collection("Applicants")
        Person = await Applicants.findOne({email: req.body.email})
        if(!Person){
            Person = {
                email: req.body.email, 
                name: req.body.given_name, 
                applied: false,
                payment_id: "",
                team_name: "",
                player1_name: "",
                player1_mob: "",
                player1_gameid: "",
                player1_discord: "",
                player1_rank: "",
                player2_name: "",
                player2_mob: "",
                player2_gameid: "",
                player2_discord: "",
                player2_rank: "",
                player3_name: "",
                player3_mob: "",
                player3_gameid: "",
                player3_discord: "",
                player3_rank: "",
                player4_name: "",
                player4_mob: "",
                player4_gameid: "",
                player4_discord: "",
                player4_rank: "",
                player5_name: "",
                player5_mob: "",
                player5_gameid: "",
                player5_discord: "",
                player5_rank: "",
                player6_name: "",
                player6_mob: "",
                player6_gameid: "",
                player6_discord: "",
                player6_rank: "",
                player_count: 1,
            }
            const insert = await Applicants.insertOne(Person)
            console.log(insert)
        }
        res.status(200).json(Person)
    } catch (error) {
        console.log("Error in /findOrAdd: ", error)
        res.status(500)
    } finally {
        await client.close()
    }
})

app.post("/update", async(req, res) => {
    const client = new MongoClient(dburl)
    try {
        const db = client.db("Tournament")
        const Applicants = db.collection("Applicants")
        Team = req.body
        delete Team._id
        temp = await Applicants.replaceOne({email: req.body.email}, Team)
        Player = await Applicants.findOne({email: req.body.email})
        console.log(Player)
        res.status(200).json(Player)
    } catch (error) {
        console.log("Error in /update: ", error)
        res.status(500)
    }
    finally{
        await client.close()
    }
})

app.post("/addPayment", async (req, res) => {
    const client = new MongoClient(dburl)
    try {
        const db = client.db("Tournament")
        const Applicants = db.collection("Applicants")
        Player = await Applicants.updateOne({_id: new ObjectId(req.body._id)}, {$set: {payment_status: "paid", payment_id: req.body.pid}})
        console.log(Player)
        temp = await Applicants.findOne({_id: new ObjectId(req.body._id)})
        res.status(200).json(temp)
    } catch (error) {
        console.log("Error in /confirmPayment: ", error)
        res.status(500)
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