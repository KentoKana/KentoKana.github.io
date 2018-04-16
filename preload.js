//Pre-Loading Screen====================================//

const preload = document.getElementById('preloadTriforce');
const navi = document.getElementById('navigation');
const timeLoad = document.getElementById('time');
const greetLoad = document.getElementById('greeting');
const searchLoad = document.getElementById('searching');

let displayAsset = [
  navi,
  timeLoad,
  greetLoad,
  searchLoad
];

let loaded = false;

function displayOff(){
  if(loaded === false){
    for(i=0;i<displayAsset.length;i++){
      displayAsset[i].style.display = 'none';
    }
  } 
}

function pageLoaded(){
  setInterval(function(){
    loaded = true;
    if(loaded === true && preload.className === "preloadImg"){
      preload.className = "preloadOff";
      document.body.style.display = ""
      for(i=0;i<displayAsset.length;i++){
        displayAsset[i].style.display = '';
      }
      console.log('the page is loaded');
    }
  }, 2500)
}