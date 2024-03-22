import {leftDiv} from "./info.js"
import{rightDiv} from "./img.js"

let myData ={
    title1 : "Ethereal Meow",
    title2 : "Meowcore",
    par1 : "In the town of Ethereal Meow, cats were not just pets; they were revered as magical beings with powers beyond comprehension. Among these mystical felines was Luna, a cat with fur as white as the moonlight and eyes that sparkled like stars. Luna was known far and wide for her wisdom and kindness, and she was believed to be a direct descendant of the ancient Guardians of Ethereal Meow.",
    par2 : "One day, a great darkness threatened to engulf the town, casting a shadow over its once vibrant streets. Luna knew that she had to act quickly to protect her home and her people. Drawing upon the ancient magic of her ancestors, Luna embarked on a quest to find the source of the darkness and vanquish it once and for all. Through her courage and determination, Luna was able to defeat the darkness and restore peace to Ethereal Meow, proving that even the smallest of creatures can make a difference in the world.",
    buttonOne :"Contact Us",
    buttonTwo : "About Us",
    buttonThree : "News",
    buttonFour : "More",
    img : "meow.png"
}
const {title1, title2, par1, par2, buttonOne, buttonTwo, buttonThree, buttonFour, img} = myData
let container = document.getElementById("container")


container.append(leftDiv(title1, title2, par1,  par2, buttonOne, buttonTwo, buttonThree, buttonFour))
container.append(rightDiv(img))

