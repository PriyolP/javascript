let data = {
    "basics": {
        "name": "John Doe",
        "label": "Programmer",
        "picture": "",
        "email": "john@gmail.com",
        "phone": "(912) 555-4321",
        "website": "http://johndoe.com",
        "summary": "A summary of John Doe...",
        "location": {
            "address": "2712 Broadway St",
            "postalCode": "CA 94115",
            "city": "San Francisco",
            "countryCode": "US",
            "region": "California"
        },
        "profiles": [
            {
                "network": "Twitter",
                "username": "john",
                "url": "http://twitter.com/john"
            }
        ]
    },
    "work": [
        {
            "company": "Company",
            "position": "President",
            "website": "http://company.com",
            "startDate": "2013-01-01",
            "endDate": "2014-01-01",
            "summary": "Description...",
            "highlights": [
                "Started the company"
            ]
        }
    ],
    "education": [
        {
            "institution": "University",
            "area": "Software Development",
            "studyType": "Bachelor",
            "startDate": "2011-01-01",
            "endDate": "2013-01-01",
            "gpa": "4.0",
            "courses": [
                "DB1101 - Basic SQL"
            ]
        }
    ],
    "awards": [
        {
            "title": "Award",
            "date": "2014-11-01",
            "awarder": "Company",
            "summary": "There is no spoon."
        }
    ],
    "publications": [
        {
            "name": "Publication",
            "publisher": "Company",
            "releaseDate": "2014-10-01",
            "website": "http://publication.com",
            "summary": "Description..."
        }
    ],
    "skills": [
        {
            "name": "Web Development",
            "level": "Master",
            "keywords": [
                "HTML",
                "CSS",
                "Javascript"
            ]
        }
    ],
    "languages": [
        {
            "language": "English",
            "fluency": "Native speaker"
        }
    ],
    "interests": [
        {
            "name": "Wildlife",
            "keywords": [
                "Ferrets",
                "Unicorns"
            ]
        }
    ]
}
let space2 = ' &nbsp; &nbsp; ';
function pop() {
    let basics = data.basics, work = data.work, education = data.education, awards = data.awards, publications = data.publications, skills = data.skills, languages = data.languages, interests = data.interests;
    let profilesList = "", workList = "", educationList = "", awardsList = "<ul>", publicationList = "<ul>", skillsList = "<ul>", languageList = "<ol>", hobbiesList = "<ul>";
    for (let [i, x] of data.basics.profiles.entries()) {
        profilesList += `| ${x.url} `;
    }
    for (let x of work) {
        let z = "<ul>";
        var i;
        for (i = 0; i < x.highlights.length; i++) {
            z += "<li>" + x.highlights[i] + "</li>";
        }
        z += '</ul>'
        workList += ` &nbsp ${space2} <b> ${x.company}</b><span style="float: right; margin-right: 100px;">${x.startDate} - ${x.endDate}</span><br>
        &nbsp ${space2} Position : ${x.position}<br> &nbsp ${space2} &nbsp ${space2} ${x.summary}`
        //<br>key Points: <br>${z}`
    }
    for (let x of education) {
        educationList += ` ${space2} <b> ${x.institution} (${x.studyType})</b><span style="float: right; margin-right: 100px;">${x.startDate} - ${x.endDate}</span><br>
        &nbsp ${space2} Studyed in ${x.area} and course of ${x.courses[0]} and score of GPA is ${x.gpa}.`
    }
    for (let x of awards) {
        awardsList += ` <li> ${x.title} on ${x.date} from ${x.awarder} as ${x.summary}</li>`
    }
    awardsList += '</ul>'
    for (let x of publications) {
        publicationList += `<li>Authour by ${x.name} and released on ${x.releaseDate} to order visit on <a>${x.website}</a>.</li>`;
    }
    publicationList += "</ul>"
    for (let x of skills) {
        skillsList += `<li>${x.name} ( Level : ${x.level}) and followed used in this technologies are ${x.keywords}.</li>`;
    }
    for (let x of languages) {
        languageList += `<li><b>${x.language}</b> has fluency of ${x.fluency}.</li>`;
    }
    languageList += "</ol>"
    for (let x of interests) {
        hobbiesList += `<li>${x.name} in this main interest on ${x.keywords}.</li>`
    }
    // console.log(hobbiesList);
    document.getElementById('show').innerHTML = `<h2 style="text-align:center">${basics.name}</h2><h5 style="text-align:center">${basics.location.address}, ${basics.location.city} | ${basics.phone}</h5><h5 style="text-align:center">${basics.email} ${profilesList} </h5><hr>
    <div><b style="font-size: 17px;">Work Experience </b><br><br> ${workList} </div><br>
    <div><b style="font-size: 17px;"> Education </b> <br><br> ${educationList}</div><br>
    <div><b style="font-size: 17px;"> Achievements </b> <br> ${awardsList}</div><br>
    <div><b style="font-size: 17px;"> Publication </b> <br> ${publicationList}</div><br>
    <div><b style="font-size: 17px;"> Skills </b> <br> ${skillsList}</div><br>
    <div><b style="font-size: 17px;"> Languages </b> <br> ${languageList}</div><br>
    <div><b style="font-size: 17px;"> Hobbies and Interest </b> <br> ${hobbiesList}</div><br>`
}
setTimeout(function () { pop(); }, 100);
// pop();