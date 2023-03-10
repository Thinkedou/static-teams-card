console.log('teamsApp_full')

// créer toutes les cards pour tous les membres de l'équipe
// on peut s'aider avec cloneNode 
// https://developer.mozilla.org/fr/docs/Web/API/Node/cloneNode
// pour éviter d'avoir trop de code à créer 

// Regardez aussi un peu l'object destructuring ^^
// > https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment


// il est peut-être utile ici d'utiliser querySelector sans passer par document.querySelector ^^
// on peut en effet cibler directement un élément du dom et lui appliquer querySelector
// maCard.querySelector('ul') > que les ul en partant de l'élement "maCard"






// en bonus : vous pourriez également mixer cet exercice avec le caroussel
// et faire défiler les cards de la team 

const teams =[
    {
        'firstName' : 'Menuk',
        'lastName'  : 'Efrim',
        'verbatim'  : 'Behaviour-driven Self-driving Conference Calls',
        'jobTitle'  : 'Full Stack 🚀',
        'profilePic': 'profil01.jpg',
        'entry':{
            subEntry:'yeah'
        },
        'stack':[{
                'label':'VueJs',
                'level':3
            },
            {
                'label':'php',
                'level':5
            }
        ]
    },
    {
        'firstName' : 'Elena',
        'lastName'  : 'Stanget',
        'verbatim'  : 'Benchmark wearable eyeballs',
        'jobTitle'  : 'Creative Guru ',
        'profilePic': 'profil02.jpg',
        'stack':[{
                'label':'AE',
                'level':5
            },
            {
                'label':'Patience',
                'level':5
            }
        ]
    },
    {
        'firstName' : 'Alan',
        'lastName'  : 'Vision',
        'verbatim'  : 'Implement vertical convergence',
        'jobTitle'  : 'Techno-Mage',
        'profilePic': 'profil03.jpg',

        'stack':[{
                'label':'Excell',
                'level':2
            },
            {
                'label':'Quora',
                'level':5
            }
        ]
    }
]

let leJob = document.querySelector('.job')
let nomPrenom = document.querySelector('.card-text>h2')
let leLaius = document.querySelector('.card-text>p')

let profilPic = document.querySelector(".card-image")


const {
    firstName,
    lastName,
    jobTitle,
    verbatim
} = teams[0]

let user= ['Albert','Montaigu']

let [{entry:{subEntry/*🦆🦆*/}},user2,user3] = teams


console.log(subEntry)
// let firstName = teams[0].firstName

leJob.textContent =jobTitle
nomPrenom.textContent = `${firstName +' '+ lastName}`

leLaius.textContent = verbatim

let createCard = (oneGuy)=>{
    let {
        firstName,
        lastName,
        jobTitle,
        verbatim,
        profilePic,
        stack
    }   = oneGuy

    console.log(firstName,stack)
}


for (let i = 0; i < teams.length; i++) {
    let oneGuy = teams[i]
    
    createCard(oneGuy)

}



// si vous êtes en avance :
