// array of image 2 times
// randomly put the images in the 3 by 4 grid
// if clicked flip the back and 
// if two consecative click match remove from the grid
//  else flip the back page
// 

document.addEventListener("DOMContentLoaded", () => {





    // card array 
    cardArray = [{
            name: "cat",
            img: 'image/cat.png'
        },
        {
            name: "cat",
            img: 'image/cat.png'
        },
        {
            name: "chamellon",
            img: 'image/chamellon.png'

        },
        {
            name: "chamellon",
            img: 'image/chamellon.png'

        },
        {
            name: "fox",
            img: 'image/fox.png'
        },
        {
            name: "fox",
            img: 'image/fox.png'
        },
        {
            name: "dragon",
            img: 'image/dragon.png'
        },
        {
            name: "dragon",
            img: 'image/dragon.png'
        },
        {
            name: "giraf",
            img: 'image/giraf.png'
        },
        {
            name: "giraf",
            img: 'image/giraf.png'
        },
        {
            name: "girl",
            img: 'image/girl.png'
        },
        {
            name: "girl",
            img: 'image/girl.png'
        }
    ]


    // image slider
    // create image element , put in array
    // add event handler to go back and forth inside the array
    sliderImage = []

    function createSlider() {
        for (let j = 0; j < cardArray.length; j++) {
            if (j % 2 == 0) {
                imgs = document.createElement('img')
                    // img.setAttribute(src='image/')
                sliderImage.push(cardArray[j].img)
            }
        }
    }

    createSlider()
    var n = 0
    container = document.querySelector('#slider')
    container.src = sliderImage[0]
        // imgSource = container.getAttribute('src')

    var nextbtn = document.querySelector('.next')
    nextbtn.addEventListener('click', next)
    var backbtn = document.querySelector('.back')
    backbtn.addEventListener("click", prev)

    function next() {
        n++
        if (n >= sliderImage.length) {
            n = 0
        }
        container.src = sliderImage[n]
        auto()
    }

    function auto() {

        setTimeout(next, 500)
    }
    auto()

    function prev() {
        n--
        if (n < 0) {
            n = sliderImage.length - 1
        }
        container.src = sliderImage[n]
    }














    //  rndomaize the cards from array f
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    var cardChosen = []
    var cardChosenId = []
    var cardWon = []

    const resultDisplay = document.querySelector("#result")
    const lifeDisplay = document.querySelector("#life")

    life = 8
        // _______________________ create board _______________________
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute("src", 'image/blank.png')
            card.setAttribute('data-id', i)
            card.setAttribute('id', 'gmi')
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
        // console.log(card)
    }
    createBoard()
        // _______________________ check for match ______________________________
        //    if the id of first and second selected card mathch replace with whitle 
        // copy the selected cards in cards won
        //else replace src with blank image
        // diplay the result using alert
        // clear the chosencard and chosencardid array after checking
        // update the result

    function checkMatch() {
        var cards = document.querySelectorAll('#gmi')
        const firstSelectedCardId = cardChosenId[0]
        const secondSelectedCardId = cardChosenId[1]
        if (cardChosen[0] === cardChosen[1]) {
            cards[firstSelectedCardId].setAttribute("src", 'image/white.png')
            cards[secondSelectedCardId].setAttribute("src", 'image/white.png')
            cardWon.push(cardChosen)
            alert("you get it")
        } else {
            life--
            cards[firstSelectedCardId].setAttribute("src", 'image/blank.png')
            cards[secondSelectedCardId].setAttribute("src", 'image/blank.png')
            alert("sorry, try again")
        }

        console.log(life)
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardWon.length
        lifeDisplay.textContent = life
        if (cardWon.length === cardArray.length / 2) {
            alert("Congratulation")
            Object.freeze(cardArray)
            Object.freeze(cardChosen)
        }
        if (life <= 0) {
            alert("Game Over")

            Object.freeze(cardArray)
            Object.freeze(cardChosen)
                // Object.freeze(cardChosenId)
            life = 8
                // Object.freeze(cards)


        }

    }




    // _____________________ flip your card __________________________
    // put the cards in grid randomly
    //  with timer replace the blank with image at a time of click and flip back
    // call the check function after two flips

    function flipCard() {
        if (life < 0) {
            alert("gameOver")
        }
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img) // replace the blank card with image from card array based on selected card id 
        console.log(cardChosen)
        if (cardChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

})