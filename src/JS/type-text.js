const texts = ["Web", "Front-End", "Back-End", "Full-Stack JR"]
const typingElement = document.querySelector('.typing')

let currentTextIndex = 0
let charIndex = 0

typeText = () => {
  if (charIndex < texts[currentTextIndex].length) {
    typingElement.textContent += texts[currentTextIndex].charAt(charIndex)
    charIndex++;
    setTimeout(typeText, 100)
  } else {
    setTimeout(deleteText, 1000)
  }
}

deleteText = () => {
  if (charIndex > 0) {
    typingElement.textContent = texts[currentTextIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 60)
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length
    setTimeout(typeText, 500)
  }
}
typeText()