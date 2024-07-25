
async function fetchProfileData() {
    const url = ('assets/javascript/data/profile.json');
    const feting = await fetch(url)
    return await feting.json()
}