
const Btnn=document.getElementById("btn")
const Textt=document.getElementById("text")

Btnn.addEventListener("click",() => {
    setTimeout(()=> {
        const text2=document.getElementById("text");
        text2.textContent="ボタンをクリックしました";
}, 2000)})


