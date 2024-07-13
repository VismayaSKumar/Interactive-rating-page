const submit=document.querySelector(".submit");
const ratingBox=document.querySelector(".ratingBox");
const thankyouBox=document.querySelector(".thankyouBox");
const ratingButtons = document.querySelectorAll('.ratings button');
const selectedMsg=document.querySelector(".selected-msg");
let SelectedRating=null;
ratingButtons.forEach(element => {
    element.addEventListener("click",()=>{
        SelectedRating=element.innerText;
        console.log(SelectedRating);
    });
});

submit.addEventListener("click",()=>{
    
    if(SelectedRating)
    {
        ratingBox.classList.add('hidden');
        thankyouBox.classList.remove('hidden');
        selectedMsg.innerText=`You selected ${SelectedRating} out of 5`;
        
    }

    
});