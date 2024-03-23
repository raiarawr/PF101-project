import { sectOneFunc } from "./info.js"
import {image} from "./img.js"
import { sectTwoFunc} from "./card.js"

let sectionOneData ={
    sect1 : "hsaenth",
    sect1par : "hsaenth is a Filipino artist that paints traditionally and digitally, her inspiration is wlop (concept artist) and she aspires to reach wlop's level yet she doesn't follow routines that'll elevate her current level which is quite ironic.",
    imgTop : "fae.png",  
    buttonOne :"Contact Me",   
}

const {sect1,sect1par, imgTop, buttonOne} = sectionOneData
let sectionOne = document.getElementById("sectionOne")


let sectionTwoData ={
    sect2 : "PROJECT COMPLETED",
    par1 : "A project for Zoey Maeve's first birthday — her first portrait.",
    par2 : "A rush commissioned artwork which depicts dear client's alure.",
    par3 : "A study for hsaenth's artstyle to test this style's consistency and value.",
    par4 : "An eye study that tries to mimic realism coloring techniques.",
    img1    : "zm.png",
    img2    : "almaris.png",
    img3    : "woman.jpg",    
    img4   : "eyestudy.png",    
    buttonTwo : "Learn More",
    buttonThree : "Learn More",
    buttonFour : "Learn More",
    buttonFive : "Learn More" 


}

const { img1, img2, img3, img4, par1, par2, par3, par4,  buttonTwo, buttonThree, buttonFour, buttonFive} = sectionTwoData
let sectionTwo = document.getElementById("sectionTwo")

sectionOne.append(sectOneFunc(sect1, sect1par, buttonOne))
sectionOne.append(image(imgTop))
sectionTwo.append(sectTwoFunc( img1, img2, img3, img4, par1, par2, par3, par4,  buttonTwo, buttonThree, buttonFour, buttonFive))
