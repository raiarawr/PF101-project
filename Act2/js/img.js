const image = (imgTop) => {
    let div = document.createElement("div")
    div.className = "profile"
    div.innerHTML = `<img src="./images/${imgTop}">
                     
    `
    return div
}
export {image}
