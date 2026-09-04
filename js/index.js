// universal
function createButton (icon, text) {
    const customButton = document.createElement("a")
    const buttonText = document.createTextNode(text) // grunden til vi bruger textnode er pga .textcontent overskriver alle child elementerne, det resultere i at vores img bliver overskrevet og det kun er texten inde i a tagget.
    let buttonIcon = document.createElement("img")
    buttonIcon.setAttribute("src", `${icon}`)
    customButton.classList.add("button")
    
    customButton.append(buttonIcon, buttonText)
    return customButton
}

// header
let headerElement = document.querySelector(".header")

let headerArrow = document.createElement("p")
headerArrow.textContent = `<`
headerArrow.classList.add("header__arrow")

let headerAvatar = document.createElement("img")
headerAvatar.setAttribute("src", "https://placehold.co/32x32")
headerAvatar.classList.add("header__avatar")

headerElement.append(headerArrow, headerAvatar)

// hero
let heroElement = document.querySelector(".hero")
heroElement.style.backgroundImage = `url(${hero.image})`

let heroDiv = document.createElement("div")
heroDiv.classList.add("hero__div")

const heroHeader = document.createElement("h1")
heroHeader.textContent = `${hero.headline}`

const heroParagraph = document.createElement("p")
heroParagraph.textContent = `${hero.copy}`

const heroButton = document.createElement("a")

const exploreButton = createButton(hero.icon, "Explore")


heroDiv.append(heroHeader, heroParagraph, exploreButton)
heroElement.append(heroDiv)






//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
