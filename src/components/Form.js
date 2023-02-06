import {useState} from 'react'

import {Stack,TextField,MenuItem,Button,Box,Typography} from '@mui/material'
import {classes,division} from '../meta/formdata'
import { doc,addDoc,arrayUnion,updateDoc, collection } from "firebase/firestore"; 
import {db} from '../../src/firebase-config';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {useFormik} from 'formik'
import {signUpSchema} from '../schemas'
const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  class: '',
  division: '',
  rollNo: '',
  address1: '',
  address2: '',
  landmark: '',
  city: '',
  pincode: ''
}
const Form = () => {
  const {dispatch} = useContext(UserContext)
  const {values, errors, handleBlur,handleChange,handleSubmit,touched} = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (value) => {
      console.log(value)
    }
  })
    const add = async() => {
      const user = JSON.parse(localStorage.getItem('user'))
      const studentRef = doc(db, "users", user.uid);
      await updateDoc(studentRef, {
        students: arrayUnion()
    }
    );
    // dispatch({type:'ADD',payload:formdata})
    }
    
  return (
    <form>
        <Stack spacing={2}>
            <Stack direction='row' spacing={2}>
              <Box sx={{width:'100%'}}>
                <TextField label="First Name" fullWidth name='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur}/>
                {errors.firstName && touched.firstName ? <Typography variant="body1">{errors.firstName}</Typography> : null}
              </Box>
              <Box sx={{width:'100%'}}>
                <TextField label="Middle Name" fullWidth name='middleName' value={values.middleName} onChange={handleChange} onBlur={handleBlur}/>
              </Box>
              <Box sx={{width:'100%'}}>
                <TextField label="Last Name" fullWidth name='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                {errors.lastName && touched.lastName ? <Typography variant="body1">{errors.lastName}</Typography> : null}
              </Box>
            </Stack>
            <Stack direction='row' spacing={2}>
            <Box sx={{width:'100%'}}>
                <TextField label="Select Class" select fullWidth name='class' value={values.class} onChange={handleChange} onBlur={handleBlur}>
                {classes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                </TextField>
                {errors.class && touched.class ? <Typography variant="body1">{errors.class}</Typography> : null}
            </Box>
            <Box sx={{width:'100%'}}>
                <TextField label="Select Division" select name='division' fullWidth value={values.division} onChange={handleChange} onBlur={handleBlur}>
                {division.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                </TextField>
                {errors.division && touched.division ? <Typography variant="body1">{errors.division}</Typography> : null}
                </Box>
                <Box sx={{width:'100%'}}>
                <TextField label="Enter Roll Number in Digits" name='rollNo' inputProps={{maxLength:'2', inputMode: 'numeric' }} value={values.rollNumber} onChange={handleChange} onBlur={handleBlur}  fullWidth />
                {errors.rollNo && touched.rollNo ? <Typography variant="body1">{errors.rollNo}</Typography> : null}
                </Box>
            </Stack>
        </Stack>
        <Stack spacing={2} mt={2}>
            <Stack direction='row' spacing={2}>
                <TextField label="Address Line 1" name='address1' multiline fullWidth value={values.address1} onChange={handleChange} onBlur={handleBlur}/>
                <TextField label="Address Line 2" name='address2' multiline fullWidth value={values.address2} onChange={handleChange} onBlur={handleBlur}/>
            </Stack>
            <Stack direction='row' spacing={2}>
            <Box sx={{width:'100%'}}>
                <TextField label="Landmark" fullWidth name='landmark' value={values.landmark} onChange={handleChange} onBlur={handleBlur}/>
                {errors.landmark && touched.landmark ? <Typography variant="body1">{errors.landmark}</Typography> : null}
            </Box>
            <Box sx={{width:'100%'}}>
                <TextField label="City" fullWidth name='city' value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                {errors.city && touched.city ? <Typography variant="body1">{errors.city}</Typography> : null}
                </Box>
                <Box sx={{width:'100%'}}>
                <TextField label="Pincode" fullWidth name='pincode' value={values.pincode} onChange={handleChange} onBlur={handleBlur}/>
                {errors.pincode && touched.pincode ? <Typography variant="body1">{errors.pincode}</Typography> : null}
                </Box>
            </Stack>
        </Stack>
        <Button variant="contained" onClick={handleSubmit}>Contained</Button>
    </form>
  )
}

export default Form