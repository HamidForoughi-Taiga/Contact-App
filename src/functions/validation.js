const validateForm = (formData) => {
    const newErrors = {};
    const phoneNumberRegex = /^(\+98|0)?9\d{9}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (formData.name.trim() === '') {
        newErrors.name = 'Name is required'
    } else {
        delete newErrors.name
    }

    if(formData.lName.trim() === '') {
        newErrors.lName = 'Last Name is required'
    } else {
        delete newErrors.lName
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    } else {
        delete newErrors.email
    }
    
    if(!phoneNumberRegex.test(formData.phone)) {
        newErrors.phone = 'Invalid phone'
    } else {
        delete newErrors.phone
    }

    return newErrors;
};
export default validateForm