function validateForm(){
    const name=document.getElementById('name').value;
    const email=document.getElementById('name').value;
    const subject=document.getElementById('name').value;
    const comment=document.getElementById('name').value;

    const nameError=document.getElementById('name-error');
    const emailError=document.getElementById('email-error');
    const subjectError=document.getElementById('subject-error');
    const commentError=document.getElementById('comment-error');

    nameError.textContent='' ;
    emailError.textContent='' ;
    subjectError.textContent='' ;
    commentError.textContent='' ;

    let isValid=true;

    if(name==='' || name.length<3){
        nameError.textContent='The name can not be empty or less than 3 letters';
        isValid=false;
    }
    if(email==='' ||!email.includes('@')){
        emailError.textContent='Please fill out this field';
        isValid=false;
    }
    if(subject==='' || subject.length<10){
        subjectError.textContent='The subject can not be empty or less than 10 letters';
        isValid=false;
    }
    if(comment===''){
        commentError.textContent='Please fill out this field';
        isValid=false;
    }
    return isValid;

}