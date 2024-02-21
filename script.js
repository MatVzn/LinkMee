const html = document.documentElement

function changeTheme(color) {

  if (html.classList.contains(color)) {

    html.className = ''

  } else {

    html.className = ''
    html.classList.add(color)

  }
}