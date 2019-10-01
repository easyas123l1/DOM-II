// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('mouseenter', () => {
  nav.style.transform = 'scale(0.5)';
})

const intro = document.querySelector('.intro');
intro.addEventListener('dblclick', () => {
  intro.style.transform = 'scale(2.2)';
})

const text = document.querySelectorAll('.text-content');
text.forEach( e => {
  e.addEventListener('click', () => {
    e.style.color='blue';
  })
})

const text2 = document.querySelector('.text-content');
text2.addEventListener('click', () => {
  text2.style.backgroundColor='black';
})

const content = document.querySelector('.content-pick');
content.addEventListener('mouseleave', () => {
  content.style.backgroundColor='blue';
})

const btn = document.querySelectorAll('.btn');
btn.forEach( e => {
  e.addEventListener('mouseover', () => {
  e.style.border = '8px solid pink'; 
  })
})

const destination = document.querySelectorAll('.destination');
destination.forEach( e => {
  e.addEventListener('mousewheel', () => {
    e.textContent = 'Lets Go Blues!!';
  })
})


const heading = document.querySelector('.logo-heading');
heading.addEventListener('mousemove', () => {
  heading.textContent = 'LETS GO BLUES!!';
  heading.style.fontSize = '73px';
  heading.style.color = 'blue';
})


const footer = document.querySelector('.footer');
footer.addEventListener('mouseout', () => {
  footer.textContent = 'LETS GO BLUES LETS GO BLUES LETS GO BLUES!!!!';
  footer.style.color = 'blue';
  footer.style.backgroundColor = 'white';
  footer.style.fontSize = '66px';
})

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(e => {
  e.addEventListener('click', () => {
    e.preventDefault();
  })
})


