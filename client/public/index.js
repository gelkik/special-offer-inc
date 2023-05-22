const newForm = document.querySelector('#form-handle');
const backImage = document.querySelector('#targetElement');

newForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        handle: e.target.handle.value
    }
    console.log(formData)
    document.body.style.backgroundColor = 'rgb(171, 69, 69)';
    document.body.style.backgroundImage = "none";
});
