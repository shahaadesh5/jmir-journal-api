const express = require('express');  //import express
const { fetchCrossRef, fetchPubMed } = require('../controller/journal');
const router = express.Router();  //use express method router to create routes to this API

//defining a GET method to this API with a request and sending a response
router.get('/', async (req, res) => {

    const { crossref, pubmed } = req.query
    
    if(!crossref && !pubmed)
        return res.status(400).json({
            success : false,
            message : "Missing req params"
        })

    const crossRefData = await fetchCrossRef(crossref); //expected param value: 10.2196/12121
    const pubMedData = await fetchPubMed(pubmed); //expected param value: 31115346

    let journal = [];
    journal.push(crossRefData);
    journal.push(pubMedData);
    if(journal.length){
        return res.status(200).json({
            success: true,
            data: journal
        })
    }
    else{
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        })
    }
})

module.exports = router;