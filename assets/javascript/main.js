function editandoProfile(profileData){
   const photo = document.getElementById('profile.photo')
   photo.src = profileData.photo
   photo.alt = profileData.name

   const name = document.getElementById('profile.name' )
   name.innerText = profileData.name
   const job = document.getElementById( 'profile.job')
   job.innerText = profileData.job
   const location = document.getElementById('profile.location' )
   location.innerText = profileData.location
   const phone = document.getElementById('profile.phone' )
   phone.innerText = profileData.phone
   phone.href = `tel:${profileData.phone}`
   const gmail = document.getElementById('profile.gmail' )
   gmail.innerText = profileData.email
   gmail.href = `mailto:${profileData.email}`
}

function updatesoftSkills(profileData) {
   const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updathardtSkills(profileData) {
   const hardSkills = document.getElementById('profile.skills.hardSkills')
   hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>  `<li class="icon">
      <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
   </li>`).join('')
}

function updateLinguagen(profileData) {
   const languages = document.getElementById('profile.languages')
   languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updatePortifolio(profileData) {
   const portfolio = document.getElementById('profile.Portfolio')
   portfolio.innerHTML = profileData.portfolio.map(portfolio => `<li>
                        <h3 class="title"> ${portfolio.name}</h3>
                        <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
                    </li>`).join('')
}

function updateProfissionalExperence(profileData){
   const proficonalexperence = document.getElementById('profile.proficional.experence')
   proficonalexperence.innerHTML = profileData.professionalExperience.map(experence =>
      `
       <li>
            <h3 class="title" >${experence.name}</h3> 
            <h5 class="pediod">${experence.period}</h5>
            <p >${experence.description}</p>
         </li>
      
      
      `).join('')
}

(async () => {

    const profileData = await fetchProfileData()
    editandoProfile(profileData)
    updatesoftSkills(profileData)
    updathardtSkills(profileData)
    updateLinguagen(profileData)
    updatePortifolio(profileData)
    updateProfissionalExperence(profileData)
    console.log(profileData)

})()