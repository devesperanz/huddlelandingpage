const button =  document.getElementById('see-review');
    button.addEventListener('click', function(){
       const review = document.getElementById('review');
       if(review.classList.contains('d-none')){
        review.style.color = 'red';
        review.classList.remove('d-none');
        button.textContent = 'Come back 3 months time for the FROZEN CHICKEN'
       }else{
        review.classList.add('d-none');
        button.textContent = 'Click for free frozen chicken'
       }
       
    });

const values = ['a', 'b', 'c ','d'];
const found = values.find(function(item){
        return item.length>1;
    })
console.log(found);
    
// let fruits = ['apple', 'banana', 'cherry'];
// // fruits.splice(0,2)
// showMessage(fruits.indexOf('apple'));

// let num = [0,24,31,89,40,30,92,34,23,12]
// val =  num.sort(function(x,y){
//     return y-x;
// })
// showMessage(val);
console.log('hello world!')