
const sectTwoFunc = (img1, img2, img3, img4, par1, par2, par3, par4,  buttonTwo, buttonThree, buttonFour, buttonFive) => {
    let div = document.createElement("div")
    
    div.innerHTML = `<div class="container">
                        <div class="box">
                            <img src="./images/${img1}"></img><br>
                            <span>${par1}</span><br>
                            <button>${buttonTwo}</button>
                        </div>
                        <div class="box">
                            <img src="./images/${img2}"></img><br>
                            <span>${par2}</span><br>
                            <button>${buttonThree}</button>
                        </div>
                        <div class="box">
                            <img src="./images/${img3}"></img><br>
                            <span>${par3}</span><br>
                            <button>${buttonFour}</button>
                        </div>
                        <div class="box">
                            <img src="./images/${img4}"></img><br>
                            <span>${par4}</span><br>
                            <button>${buttonFive}</button>
                        </div>
                    `
    return div
}
export {sectTwoFunc}