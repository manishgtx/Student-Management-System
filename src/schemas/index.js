import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstName:Yup.string().min(2).max(12).required('please enter the first name'),
    lastName:Yup.string().min(2).max(12).required('please enter the first name'),
    class: Yup.string().required('please select the class'),
    division:Yup.string().required('please select your division'),
    rollNo:Yup.string().min(2).max(12).required('please enter the first name'),
    landmark:Yup.string().required('please enter the first name'),
    city:Yup.string().min(2).max(12).required('please enter the first name'),
    pincode:Yup.string().max(6).required('please enter the first name'),
})