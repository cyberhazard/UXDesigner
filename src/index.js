import './stylus/style.styl'

const root = document.querySelector(':root');
const colorSwitch = document.querySelector('.Switch input');

colorSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    root.style.setProperty('--primaryColor', 'black')
    root.style.setProperty('--secondaryColor', 'white')
    root.style.setProperty('--logoImage', `url(${require('./images/logo-white.svg')})`)
    root.style.setProperty('--switchImage', `url(${require('./images/Sun.svg')})`)
  } else {
    root.style.setProperty('--primaryColor', '')
    root.style.setProperty('--secondaryColor', '')
    root.style.setProperty('--logoImage', '')
    root.style.setProperty('--switchImage', '')
  }
})
