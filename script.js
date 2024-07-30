const tabLinksEl = document.getElementsByClassName('tab-links');
const tabContentsEl = document.getElementsByClassName('tab-contents');

const opentab = (tabName) => {
   for(tabLink of tabLinksEl){
      tabLink.classList.remove('active-link');
   }
   for(tabContent of tabContentsEl){
      tabContent.classList.remove('active-tab')
   }
   event.currentTarget.classList.add('active-link');
   document.getElementById(tabName).classList.add('active-tab')
}