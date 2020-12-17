const axios = require('axios');
const parseString = require('xml2js').parseString;

// CrossRef API fetching journal data
exports.fetchCrossRef = criteria => {
    return new Promise(async (resolve, reject) => {
        try{
            let response = await axios.get(`https://api.crossref.org/works/${criteria}`);
            var jorunal = {
                title: response.data.message.title[0],
                authors: response.data.message.author.map(authorDetail => {
                    return {
                        firstname : authorDetail.given,
                        lastname : authorDetail.family,
                        ORCID : authorDetail.ORCID
                    }
                })
            }
            resolve(jorunal);
        }
        catch(error) {
            console.log(error)
            reject(error);
        }
    })
} 

// PubMed API fetching journal data

exports.fetchPubMed = criteria => {
    return new Promise(async (resolve, reject) => {
        try{
            let response = await axios.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${criteria}`);
            parseString(response.data, (err, result) => {
                var authors;
                authors = result.eSummaryResult.DocSum[0].Item.filter(bookItem => bookItem.$.Name=='AuthorList')
                authors = authors[0].Item;

                title = result.eSummaryResult.DocSum[0].Item.filter(bookItem => bookItem.$.Name=='Title')
                title = title[0]._;

                var journal = {
                    title,
                    authors: authors.map(author => { 
                        firstname = author._.split(' ')[1];
                        lastname = author._.split(' ')[0];
                        return{ firstname, lastname } })
                }

                resolve(journal);
            })
            
        }
        catch(error) {
            console.log(error)
            reject(error);
        }
    })
}