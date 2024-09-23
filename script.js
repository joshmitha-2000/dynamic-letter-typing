const words = ["Hello", "Welcome", "To","Fronted", "Classes"];
const typingSpeed = 100; 
const pauseBetweenWords = 1000; 

let wordIndex = 0;
let letterIndex = 0;
const dynamicTextElement = document.getElementById("dynamicText");

function typeWord() {
    
    const currentWord = words[wordIndex];
    
    if (letterIndex < currentWord.length) {
     
        dynamicTextElement.innerHTML += currentWord.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeWord, typingSpeed);
    } else{
        setTimeout(deleteWord, pauseBetweenWords);
    }
}

function deleteWord() {
    const currentWord = words[wordIndex];

    if (letterIndex > 0) {
        dynamicTextElement.innerHTML = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteWord, typingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
        setTimeout(typeWord, typingSpeed);
    }
}

window.onload = typeWord;
