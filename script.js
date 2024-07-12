




// Translate 
// let language = sessionStorage.getItem('lang') 
// console.log(language)
// if(language == 'ta'){
//   document.querySelector('.lang-eng').classList.remove('underline')
//   document.querySelector('.lang-tamil').classList.add('underline')
// }else{
//   document.querySelector('.lang-tamil').classList.remove('underline')
// }

//  document.querySelector('.lang-tamil').addEventListener('click',()=>{
//     document.querySelector('.lang-eng').classList.remove('underline')
//   document.querySelector('.lang-tamil').classList.add('underline')
//  })
//  document.querySelector('.lang-eng').addEventListener('click',()=>{
//     document.querySelector('.lang-tamil').classList.remove('underline')
//   document.querySelector('.lang-eng').classList.add('underline')
//  })
// lang = 'en'
// let lang = sessionStorage.getItem('lang')

// if(lang=='ta'){
//   document.querySelector('.lang-eng').classList.remove('underline')
//   document.querySelector('.lang-tamil').classList.add('underline')
// }else{
//   document.querySelector('.lang-tamil').classList.remove('underline')
//   document.querySelector('.lang-eng').classList.add('underline')
// }



// Font preference

const font_preference = document.querySelectorAll(".font-pref");
font_preference.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.classList.contains("font-large")) {
      document.querySelector("html").style.fontSize = "17px";
      sessionStorage.setItem('fontSize','17px');
      ele.classList.add("underline");
      document.querySelector(".font-base").classList.remove("underline");
      document.querySelector(".font-small").classList.remove("underline");
    }
    if (ele.classList.contains("font-base")) {
      document.querySelector("html").style.fontSize = "16px";
      sessionStorage.setItem('fontSize','16px');
      ele.classList.add("underline");
      document.querySelector(".font-large").classList.remove("underline");
      document.querySelector(".font-small").classList.remove("underline");
    }
    if (ele.classList.contains("font-small")) {
      document.querySelector("html").style.fontSize = "15px";
      sessionStorage.setItem('fontSize','15px');
      ele.classList.add("underline");
      document.querySelector(".font-large").classList.remove("underline");
      document.querySelector(".font-base").classList.remove("underline");
    }
  });
});

const fontsize = sessionStorage.getItem('fontSize');
if(fontsize == '15px'){
  document.querySelector("html").style.fontSize = "15px";
  document.querySelector(".font-small").classList.add("underline");
  document.querySelector(".font-large").classList.remove("underline");
  document.querySelector(".font-base").classList.remove("underline");
}else if(fontsize == '17px'){
  document.querySelector("html").style.fontSize = "17px";
  document.querySelector(".font-large").classList.add("underline");
  document.querySelector(".font-base").classList.remove("underline");
  document.querySelector(".font-small").classList.remove("underline");
}


// Dark Mode

let dark = 0;

const darkmode = sessionStorage.getItem('darkmode');
if(darkmode === '1'){
  document.querySelector(".root").classList.add("dark");
  document.querySelector(".darkmode>img").src =
  "./assets/img/tolight.png";
  dark++;
}

document.querySelector(".darkmode").addEventListener("click", () => {
  if (dark == 0) {
    document.querySelector(".root").classList.add("dark");
    sessionStorage.setItem('darkmode','1');
    document.querySelector(".darkmode>img").src =
      "./assets/img/tolight.png";
    dark++;
  } else {
    document.querySelector(".root").classList.remove("dark");
    sessionStorage.setItem('darkmode','0');
    document.querySelector(".darkmode>img").src =
      "./assets/img/todark.png";
    dark = 0;
  }
});