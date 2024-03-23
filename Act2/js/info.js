const sectOneFunc = (sect1,sect1par, buttonOne) => {
    let div = document.createElement("div")
    div.className = "sectOneInfo"
    div.innerHTML = `<h1 class="text">${sect1}</h1> 
                    <p>${sect1par}</p>
                    <button>${buttonOne}</button>
                
                    
                    `
    return div
}
export {sectOneFunc}