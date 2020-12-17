# JMIR Journal API

This application exposes a combined API from 2 sources - [CrossRef](https://github.com/CrossRef/rest-api-doc) and [PubMed](https://www.ncbi.nlm.nih.gov/books/NBK25500/)

The API is created off node.js and express.js. It uses Axios to fetch data from respective sources and the Journal controller returns title and authors data.

The application uses [xml2js](https://www.npmjs.com/package/xml2js) package to convert XML response from PubMed API to JSON and select title and author data.

The route for the exposed API is `/journal` and expects 2 parameters : `crossref` & `pubmed`

To test out the API:

1. Clone repo and Install dependencies using `npm install`
2. Run the application using `node index.js`
3. The API is accessible on PORT 3000: http://localhost:3000/journal
4. Test paramaters are: http://localhost:3000/journal?crossref=10.2196/12121&pubmed=31115346

API response:

`{
    "success": true,
    "data": [
        {
            "title": "Transforming Mental Health Delivery Through Behavioral Economics and Implementation Science: Protocol for Three Exploratory Projects",
            "authors": [
                {
                    "firstname": "Rinad S",
                    "lastname": "Beidas",
                    "ORCID": "http://orcid.org/0000-0001-6056-6071"
                },
                {
                    "firstname": "Kevin G",
                    "lastname": "Volpp",
                    "ORCID": "http://orcid.org/0000-0003-1423-4599"
                },
                {
                    "firstname": "Alison N",
                    "lastname": "Buttenheim",
                    "ORCID": "http://orcid.org/0000-0003-2432-1637"
                },
                {
                    "firstname": "Steven C",
                    "lastname": "Marcus",
                    "ORCID": "http://orcid.org/0000-0001-7819-3824"
                },
                {
                    "firstname": "Mark",
                    "lastname": "Olfson",
                    "ORCID": "http://orcid.org/0000-0002-3958-5662"
                },
                {
                    "firstname": "Melanie",
                    "lastname": "Pellecchia",
                    "ORCID": "http://orcid.org/0000-0003-1924-0269"
                },
                {
                    "firstname": "Rebecca E",
                    "lastname": "Stewart",
                    "ORCID": "http://orcid.org/0000-0002-6453-6715"
                },
                {
                    "firstname": "Nathaniel J",
                    "lastname": "Williams",
                    "ORCID": "http://orcid.org/0000-0002-3948-7480"
                },
                {
                    "firstname": "Emily M",
                    "lastname": "Becker-Haimes",
                    "ORCID": "http://orcid.org/0000-0002-9922-8667"
                },
                {
                    "firstname": "Molly",
                    "lastname": "Candon",
                    "ORCID": "http://orcid.org/0000-0001-8312-951X"
                },
                {
                    "firstname": "Zuleyha",
                    "lastname": "Cidav",
                    "ORCID": "http://orcid.org/0000-0003-4323-0175"
                },
                {
                    "firstname": "Jessica",
                    "lastname": "Fishman",
                    "ORCID": "http://orcid.org/0000-0003-2867-8166"
                },
                {
                    "firstname": "Adina",
                    "lastname": "Lieberman",
                    "ORCID": "http://orcid.org/0000-0002-0527-5068"
                },
                {
                    "firstname": "Kelly",
                    "lastname": "Zentgraf",
                    "ORCID": "http://orcid.org/0000-0001-6554-4859"
                },
                {
                    "firstname": "David",
                    "lastname": "Mandell",
                    "ORCID": "http://orcid.org/0000-0001-8240-820X"
                }
            ]
        },
        {
            "title": "Clinic-Based Delivery of the Young Men's Health Project (YMHP) Targeting HIV Risk Reduction and Substance Use Among Young Men Who Have Sex with Men: Protocol for a Type 2, Hybrid Implementation-Effectiveness Trial.",
            "authors": [
                {
                    "firstname": "JT",
                    "lastname": "Parsons"
                },
                {
                    "firstname": "T",
                    "lastname": "Starks"
                },
                {
                    "firstname": "S",
                    "lastname": "Gurung"
                },
                {
                    "firstname": "D",
                    "lastname": "Cain"
                },
                {
                    "firstname": "J",
                    "lastname": "Marmo"
                },
                {
                    "firstname": "S",
                    "lastname": "Naar"
                }
            ]
        }
    ]
}`