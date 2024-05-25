const changeColor = document.querySelector(".btn");
console.log(changeColor);


const root = document.querySelector(":root");
console.log(root);

changeColor.addEventListener("click" , (event)=>{
    let num = Math.round(Math.random()*360);
    console.log(num);
    root.style.setProperty('--hue' , num );
})

//!========> get the css style for the root element .
// const sr = getComputedStyle(root);

//!=========>  get the property value of a css, by providing the property name as argument.
// console.log(sr.getPropertyValue('--hue'));
