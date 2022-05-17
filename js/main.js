toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }


let nameInput = document.getElementById('fullnameInput');

nameInput.addEventListener('input',function(){

    if(!checkFullNameLength(nameInput.value)){
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'FullName must be greated than 5 character';
        isValid = false;
    }
    else{
        nameInput.nextElementSibling.classList.add('d-none');
    }
    console.log(this.value)
})



// nameInput.addEventListener('blur',function(){
//     if(this.value.length<5){
//         this.nextElementSibling.classList.remove('d-none');
//         this.nextElementSibling.innerText = 'FullName must be greated than 5 character';
//     }
//     else{
//         this.nextElementSibling.classList.add('d-none');
//     }
// })

document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();

    let nameInput = document.getElementById('fullNameInput');
    let isValid=true;
    
    if(!checkFullNameLength(nameInput.value)){
        nameInput.nextElementSibling.classList.remove('d-none');
        nameInput.nextElementSibling.innerText = 'FullName must be greated than 5 character';
        isValid = false;
    }
    else{
        nameInput.nextElementSibling.classList.add('d-none');
    }

    document.getElementById('contactForm').addEventListener('submit',function(e){
        e.preventDefault();
    
        let groupInput = document.getElementById('groupInput');
        let isValid=true;
        
        if(!checkGroupLength(nameInput.value)){
            nameInput.nextElementSibling.classList.remove('d-none');
            nameInput.nextElementSibling.innerText = 'Group must be greated than 3 character';
            isValid = false;
        }
        else{
            nameInput.nextElementSibling.classList.add('d-none');
        }
    


    let ageInput = document.getElementById('ageInput');
    if(!checkAge(ageInput.value)){
        ageInput.nextElementSibling.classList.remove('d-none');
        ageInput.nextElementSibling.innerText = 'Age must be greater or equal 18!';
        isValid = false;
    }
    else {
        ageInput.nextElementSibling.classList.add('d-none')
    }

    if(isValid){
        toastr["success"]("Your form submited successfully!")
    }
    else{
        window.location = 'https://google.com'
    }

})

function checkFullNameLength(value){
    if(value.length<5) return false;
    else return true;
}


function checkAge(value){
    if(value<18) return false;
    else return true;
}
function checkGroupLength(value){
    if(value.length<3) return false;
    else return true;
}

