import './stylus/style.styl'

const root = document.querySelector(':root');
const colorSwitch = document.querySelector('.Switch input');

colorSwitch.addEventListener('change', e => {
  if (e.target.checked) {
    root.style.setProperty('--primaryColor', 'black')
    root.style.setProperty('--secondaryColor', 'white')
    root.style.setProperty('--inputPrimaryColor', '#DDDDDD')
    root.style.setProperty('--logoImage', `url(${require('./images/logo-white.svg')})`)
    root.style.setProperty('--switchImage', `url(${require('./images/Sun.svg')})`)
  } else {
    root.style.setProperty('--primaryColor', '')
    root.style.setProperty('--secondaryColor', '')
    root.style.setProperty('--inputPrimaryColor', '')
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
  const api = 'https://api.unisender.com/ru/api/subscribe?format=json&api_key=6wkhfat5zcsi54416q9hxe634i6gso4x7wf7m4xy&list_ids=13433066&fields[email]='
  const regular = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

  const validate = (el,value) => {
    if (!regular.test(value)) {
      alert.style.color = "#E11515";
      alert.innerHTML = "* Incorrect e-mail address! Verify that the input is correct";
      setTimeout(_ => { alert.innerHTML = "" }, 3000);
    } else {
      sendMail(api,value).then(
        alert.style.color = "var(--primaryColor)",
        alert.innerHTML="You have successfully subscribed, thank you!",
        setTimeout(_ => { alert.innerHTML = "" }, 1000),
        form.reset()
      );
    }
  }
  const sendMail = function(api,value) {
    return fetch(api+value+'&double_optin=3', {
      method: 'POST'
    })
  };

  form.onsubmit = e => {
    e.preventDefault();
    var value = document.querySelector('.Subscribe__input').value
    validate(input, value);
  }
}
subscribe();
