// header
let headerElement = document.querySelector(".header")
let headerArrow = document.createElement("p")
let headerAvatar = document.createElement("img")

headerArrow.textContent = `<`
headerArrow.classList.add("header__arrow")

headerAvatar.setAttribute("src", "https://placehold.co/32x32")
headerAvatar.classList.add("header__avatar")

headerElement.append(headerArrow, headerAvatar)



// hero
let heroElement = document.querySelector(".hero")
heroElement.style.backgroundImage = `url(${hero.image})` 





//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
