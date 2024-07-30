async function get(){
  const response = await fetch ('https://restcountries.com/v3.1/all')
  const data = response.json()
  console.log (data)
  return data
}
async function getAll (){
  let country = await get ()
  country.forEach(allCountry => {
    let countrys = document.createElement ('article')
    countrys.setAttribute ('class' , 'articles')
    countrys.innerHTML = `
      <a href = "singleCountry.html?name=${allCountry.name.common}">
      <img src = "${allCountry.flags.png}" class="flags">
      <div class='info'>
            <h2>${allCountry.name.common}</h2>
            <p>Population: <span>${allCountry.population}</span></p>
            <p>region: <span>${allCountry.region}</span></p>
            <p>capital: <span>${allCountry.capital}</span></p>
          </div>
      
      
      </a>
    
    `
    console.log(allCountry)
    document.getElementById ('main').appendChild(countrys)
    
  });
}

const countryName = new URLSearchParams(location.search).get('name')


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json())
.then (([country])=> {
  console.log(country.name.common)
  let DOMcountry = document.createElement('div')
  DOMcountry.setAttribute('class' , 'country')

  DOMcountry.innerHTML = `
  <img src = "${country.flags.png}"> 
  <h3>${country.name.common}</h3>
  `
  document.getElementById ('mainSingle').appendChild (DOMcountry)

})

  



let btn = document.getElementById('mode')
let page = document.querySelector ('body')
let title = document.querySelector ('h1')
let lightMode = document.querySelector('.light-mode')
let darkMode = document.querySelector('.dark-mode')
let btnTitleDark= document.querySelector('.dark')
let btnTitleLight=document.querySelector('.light')
let secPage = document.querySelector ('section')


btn.addEventListener ('click' , changeMode)

function changeMode (){
    
  page.classList.toggle('dark-mode-total')
  title.classList.toggle('title-dark-mode')
  lightMode.classList.toggle ('dark-mode-active')
  darkMode.classList.toggle  ('light-mode-inactive')
  btn.classList.toggle ('btn-darkmode')
  btnTitleDark.classList.toggle('light-active')
  btnTitleLight.classList.toggle('dark-inactive')
  secPage.classList.toggle ('section-dark')
    
    
    
}



