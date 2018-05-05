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

const copyRightYear = () => {
  const data = new Date();
  const year = data.getFullYear()
  const element = document.querySelector('.Footer__copyright');
  element.innerHTML = "Copyright © 2017-" + year + " UXDesigner.I’m"
}
copyRightYear();


const subscribe = () => {
  const form = document.querySelector('.Subscribe__form');
  const input = document.querySelector('.Subscribe__input');
  const alert = document.querySelector('.Subscribe__alert');
  const regular = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

  const validate = (el) => {
    if (!regular.test(el.value)) {
      alert.style.color = "#E11515";
      alert.innerHTML = "* Incorrect e-mail address! Verify that the input is correct";
      setTimeout(_ => { alert.innerHTML = "" }, 3000);
    } else {
      sendMail().then(
        alert.style.color = "var(--primaryColor)",
        alert.innerHTML="You have successfully subscribed, thank you!",
        setTimeout(_ => { alert.innerHTML = "" }, 3000),
        form.reset()
      );
    }
  }

  const sendMail = function() {
    return fetch('https://cp.unisender.com/ru/subscribe?hash=6wcacndtmdefaaaa4xyx69fwniggntno9t7wnz7m1wqgx3jehekto', {
      method: 'POST',
      body: new FormData(form)
    })
  };

  form.onsubmit = e => {
    e.preventDefault();
    validate(input);
  }
}
subscribe();
