const validateEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log("Email Validation successful")
    return regex.test(email);
}

export default validateEmail;