// universal
function createButton (icon, text) {
    const customButton = document.createElement("a")
    customButton.setAttribute("href", "#")
    const buttonText = document.createTextNode(text) // grunden til vi bruger textnode er pga .textcontent overskriver alle child elementerne, det resultere i at vores img bliver overskrevet og det kun er texten inde i a tagget.
    let buttonIcon = document.createElement("img")
    buttonIcon.setAttribute("src", `${icon}`)
    customButton.classList.add("button")
    
    customButton.append(buttonIcon, buttonText)
    return customButton
}

// main
let mainElement = document.querySelector("main")
mainElement.classList.add("main")

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

// services
services.forEach(service => {
    const serviceElement = document.querySelector(".services")
    const serviceArticle = document.createElement("article")

    let serviceIllustration = document.createElement("img")
    serviceIllustration.setAttribute("src", `${service.illustration}`)

    let serviceHeadline = document.createElement("h2")
    serviceHeadline.textContent = service.headline

    let serviceDescription = document.createElement("p")
    serviceDescription.textContent = service.text

    let serviceLink = document.createElement("a")
    serviceLink.setAttribute("href", "#")
    serviceLink.textContent = service.linktext

    serviceArticle.append(serviceIllustration, serviceHeadline, serviceDescription, serviceLink)
    serviceElement.append(serviceArticle)
})

// facilities
const facilitiesElement = document.querySelector(".facilities")

let facilitiesHeader = document.createElement("h3")
facilitiesHeader.textContent = facilities.headline
facilitiesHeader.classList.add("facilities__header")

let facilitiesDiv = document.createElement("div")
facilitiesDiv.classList.add("facilitiesDiv")

facilitiesElement.append(facilitiesHeader, facilitiesDiv)

facilities.options.forEach(option => {
    const facilitiesArticle = document.createElement("article")
    facilitiesArticle.classList.add("facilities__article")

    let facilitiesIcon = document.createElement("img")
    facilitiesIcon.setAttribute("src", option.icon)

    let facilitiesHeadline = document.createElement("h3")
    facilitiesHeadline.textContent = option.headline

    let facilitiesText = document.createElement("p")
    facilitiesText.textContent = option.text

    let facilitiesButton = document.createElement("button")
    facilitiesButton.textContent = "Show me more"

    facilitiesArticle.append(facilitiesIcon, facilitiesHeadline, facilitiesText, facilitiesButton)
    facilitiesDiv.append(facilitiesArticle)
})





//eksempel på at udskrive alle overskrifter i services i konsollen:

