let input = document.getElementById("input");
let btn = document.querySelectorAll("button");

let res = "";
let arr = Array.from(btn);
arr.forEach(btns => {
    btns.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            res = eval(res);
            input.value = res;
        }
        else if (e.target.innerHTML == "AC") {
          res = "";
          input.value = res;
        } else if (e.target.innerHTML == "DE") {
          res = res.substring(0, res.length-1);
          input.value = res;
        }
         else {
          res += e.target.innerHTML;
          input.value = res;
        }
    })
})