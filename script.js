//sideBar dropdown
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');


allDropdown.forEach(item=>{
  const a = item.parentElement.querySelector('a:first-child');
   a.addEventListener('click',function(e){
    e.preventDefault();
    if(!item.classList.contains('active')){
      allDropdown.forEach(i=>{
        const aLink = i.parentElement.querySelector('a:first-child');

        aLink.classList.remove('active');
        i.classList.remove('show')
      })
    }

    this.classList.toggle('active');
    item.classList.toggle('show')
   })
})




//Profile Dropdown

const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-Link')


imgProfile.addEventListener('click',function(){

  dropdownProfile.classList.toggle('show')
})
window.addEventListener('click',function(e){
  if(e.target !== imgProfile){
    if(e.target !== dropdownProfile){
      if(dropdownProfile.classList.contains('show')){
        dropdownProfile.classList.remove('show')
      }
    }
  }
})