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


(async () => {

    const profileData = await fetchProfileData()
    editandoProfile(profileData)
    updatesoftSkills(profileData)
    console.log(profileData)

})()