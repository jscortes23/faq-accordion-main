const questions = document.querySelectorAll('.faqs__question')

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const questionOpen = document.querySelector('.faqs__dropdown[open]')
    questionOpen.removeAttribute('open')
    question.setAttribute('open', true)
  })
})
