let sum = document.querySelector(".sum1")
sum.onclick() = function(){
    console.log("olundu")
}
let substraction = document.querySelector(".substraction1")
let multiplication = document.querySelector(".multiplication1")
let divide = document.querySelector(".divide1")
let typingSide1 = document.querySelector(".typing1")
let typingSide2 = document.querySelector(".typing2")
 
sum1.addEventListener ("click", function(){
   typingSide1.innerHTML = text.value;
   if (text.value == "") {
    alert("Fill the area")
    return;
   }

   text.value = ""
})