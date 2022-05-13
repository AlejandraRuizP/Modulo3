let btn= document.querySelector("#button");

btn.addEventListener("click", function(){
    $.getJSON("https://api.chucknorris.io/jokes/random",function(data){
        let chiste=data.value;
        let h2=document.querySelector("h2");
        h2.innerHTML=chiste;
    })
})


