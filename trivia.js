const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'Previous to his 1983 hit Holy Diver, Ronnie James Dio sang for this band alongside legendary guitarist Ritchie Blackmore?',
        choice1: 'Deep Purple',
        choice2: 'Rainbow',
        choice3: 'Elf',
        choice4: 'Black Sabbath',
        answer: 2,
    },
    {
        question: 'What Bay Area thrash band did Kirk Hammet leave in order to join Metallica in 1983?',
        choice1: 'Testament',
        choice2: 'Death Angel',
        choice3: 'Exodus',
        choice4: 'Flotsam and Jetsam',
        answer: 3,
    },
    {
        question: 'The tragic tour bus crash, which resulted in the  passing of Cliff Burton, happened while Metallica was on tour in which country?',
        choice1: 'Germany',
        choice2: 'Finland',
        choice3: 'England',
        choice4: 'Sweden',
        answer: 4,
    },
    {
        question: 'In 1984, what band was inducted into the Guinness Book of World Records for delivering the loudest performance?',
        choice1: 'Megadeth',
        choice2: 'Manowar',
        choice3: 'Mercyful Fate',
        choice4: 'Slayer',
        answer: 2,
    },
    {
        question: 'What band recorded a version of the Iron Butterfly classic "In-A-Gadda-Da-Vida for the movie Less than Zero, in 1987?',
        choice1: 'Slayer',
        choice2: 'Possessed',
        choice3: 'Laaz Rockit',
        choice4: 'Warlock',
        answer: 1,
    },
    {
        question: 'Show No Mercy, Slayer`s first album, was financed by Tom Araya from his earnings in what profession?',
        choice1: 'School Janitor',
        choice2: 'Respiratory Therapist',
        choice3: 'X-ray Tech',
        choice4: 'McDonalds Cook',
        answer: 2,
    },
    {
        question: 'From 1982-1984 Black Sabbath employed this singer, formerly of Deep Purple?',
        choice1: 'David Coverdale',
        choice2: 'Tommy Bolin',
        choice3: 'Ian Gillan',
        choice4: 'Joe Lynn Turner',
        answer: 3,
    },
    {
        question: 'In what year did KISS unveil their, arguably underwhelming, faces without makeup?',
        choice1: '1982',
        choice2: '1983',
        choice3: '1981',
        choice4: '1986',
        answer: 2,
    },
    {
        question: 'Guns N Roses guitarist Slash was born with what, less badass, name?',
        choice1: 'Ben Wonderburg',
        choice2: 'Steve Rothman',
        choice3: 'William Rose',
        choice4: 'Saul Hudson',
        answer: 4,
    },
    {
        question: 'Finish the lyric from Metal Daze by Manowar!!! `There`s only one thing, that really sets me free...',
        choice1: 'a nice cold beer poured just for me!',
        choice2: 'the comforting embrace of waves on the sea!',
        choice3: 'Heavy Metal as loud as it can be!',
        choice4: 'distorted guitar ripping a searing lead!!',
        answer: 3,
    },
    {
        question: 'On KISS`s 1983 tour, Gene Simmons had which band thrown off the tour as opening act for `partying too hard`?',
        choice1: 'Motley Crue',
        choice2: 'Bon Jovi',
        choice3: 'Def Leppard',
        choice4: 'Sammy Hagar',
        answer: 1,
    },
    {
        question: 'Metal bands love their mascots. What is the name of the Megadeth mascot who wears metal glasses and a wired closed jaw?',
        choice1: 'Rat Bondage',
        choice2: 'Vic Rattlehead',
        choice3: 'Hed Repka',
        choice4: 'Deth Rattle',
        answer: 2,
    },
    {
        question: 'Anthrax`s 1987 album Among the Living is written about what Stephen King novel?',
        choice1: 'The Stand',
        choice2: 'IT',
        choice3: 'Christine',
        choice4: 'The Dead Zone',
        answer: 1,
    },
    {
        question: 'Which guitar shredder lent their talents to the Beastie Boys `No sleep til Brooklyn`?',
        choice1: 'Kirk Hammit',
        choice2: 'Kerry King',
        choice3: 'Jeff Hanneman',
        choice4: 'Eddie Van Halen',
        answer: 2,
    },
    {
        question: 'This classic of thrash metal was actually released by Def Jam, a hip hop label in 1986?',
        choice1: 'Metallica `Kill em All`',
        choice2: 'Anthrax `Persistence of Time`',
        choice3: 'Testament `Souls of Black`',
        choice4: 'Slayer `Reign in Blood`',
        answer: 4,
    },
    {
        question: 'Which NWOBHM band coined the term `Athletic Rock` to describe their music?',
        choice1: 'Raven',
        choice2: 'Diamond Head',
        choice3: 'Motorhead',
        choice4: 'Praying Mantis',
        answer: 1,
    },
    {
        question: 'This singer is a licensed commercial airline pilot and has captained world tours for his band, who is he?',
        choice1: 'Rob Halford',
        choice2: 'David Lee Roth',
        choice3: 'Bruce Dickinson',
        choice4: 'Joe Elliot',
        answer: 3,
    },
    {
        question: 'What band sang the words...`I come alive in the neon light, that`s when I make my moves right`?',
        choice1: 'Motley Crue',
        choice2: 'Van Halen',
        choice3: 'Judas Priest',
        choice4: 'Iron Maiden',
        answer: 3,
    },
    {
        question: 'After departing from NYC thrash band Anthrax, lead guitarist Dan Spitz went on to which profession?',
        choice1: 'Financial Advisor',
        choice2: 'Furniture Maker',
        choice3: 'Master Swiss Watchmaker',
        choice4: 'Architect',
        answer: 3,
    },
    {
        question: 'Only a band from New Jersey could be comprised of three guys named Tony, who is that band?',
        choice1: 'Whiplash',
        choice2: 'Skid Row',
        choice3: 'Overkill',
        choice4: 'Mucky Pup',
        answer: 1,
    }
]

const SCORE_POINTS = 1
const MAX_QUESTIONS = 20

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 && score >= 15) {
        return window.location.assign('/end.html')
    }
    if(availableQuestions.length === 0 && score <= 15) {
        return window.location.assign('/fail.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
