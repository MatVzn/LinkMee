function redMode() {
  const html = document.documentElement
  if(html.classList.contains('red')) {
    html.classList.remove('red')
  } else {
    html.classList.remove('green', 'red', 'blue')
    html.classList.add('red')
  }
}

function greenMode() {
  const html = document.documentElement
  if(html.classList.contains('green')) {
    html.classList.remove('green')
  } else {
    html.classList.remove('green', 'red', 'blue')
    html.classList.add('green')
  }
}

function blueMode() {
  const html = document.documentElement
  if(html.classList.contains('blue')) {
    html.classList.remove('blue')
  } else {
    html.classList.remove('green', 'red', 'blue')
    html.classList.add('blue')
  }
}