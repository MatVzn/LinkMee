const html = document.documentElement

function changeTheme(color) {

  let activeButton = html.querySelector('.active-button')
  const clickButton = html.querySelector(`.${color}`)

  switch (html.className) {

    case '': //caso nao tenha nenhuma cor
      html.classList.add(color)
      clickButton.classList.add('active-button')
      break

    case `${color}`: //caso seja a mesma cor da escolhida
      html.className = ''
      clickButton.classList.remove('active-button')
      break

    default: //caso seja uma cor diferente da escolhida
      html.className = ''
      activeButton.classList.remove('active-button')
      html.classList.add(color)
      clickButton.classList.add('active-button')
  }
}
