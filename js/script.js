const questions = document.querySelectorAll(".question")

questions.forEach(question => {
  const label = question.querySelector(".label")
  
  label.addEventListener("click", () => {
    question.classList.toggle("hide")
  })
})