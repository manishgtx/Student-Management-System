import {useState} from 'react'

import {Stack,TextField,MenuItem,Button} from '@mui/material'
import {classes,division} from '../meta/formdata'
import { doc,addDoc,arrayUnion,updateDoc, collection } from "firebase/firestore"; 
import {db} from '../firebase-config';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const Form = () => {
  const {students,dispatch} = useContext(UserContext)
    const initialValues = {firstName:'',middleName:'',lastName:'',class:'',division:'',rollNumber:'',address1:'',address2:'',landmark:'',city:'',pincode:''}
    const [formdata,setFormData] = useState(initialValues)
    const update = async() => {
      dispatch()
      const user = JSON.parse(localStorage.getItem('user'))
      const studentRef = doc(db, "users", user.uid);
      await updateDoc(studentRef, {
        students: arrayUnion(formdata)
    }
    );
    dispatch({type:'UPDATE',payload:{formdata}})
    }
    const handleUpdate = async(e) => {
      update()
    }
    
  return (
    <form onSubmit={handleUpdate}>
        <Stack spacing={2}>
            <Stack direction='row' spacing={2}>
                <TextField label="First Name" fullWidth value={formdata.firstName} onChange={(e) => setFormData({...formdata,firstName:e.target.value})}/>
                <TextField label="Middle Name" fullWidth value={formdata.middleName} onChange={(e) => setFormData({...formdata,middleName:e.target.value})}/>
                <TextField label="Last Name" fullWidth value={formdata.lastName} onChange={(e) => setFormData({...formdata,lastName:e.target.value})}/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Select Class" select fullWidth value={formdata.class} onChange={(e) => setFormData({...formdata,class:e.target.value})}>
                {classes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                </TextField>
                <TextField label="Select Division" select fullWidth value={formdata.division} onChange={(e) => setFormData({...formdata,division:e.target.value})}>
                {division.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
                </TextField>
                <TextField label="Enter Roll Number in Digits" inputProps={{maxLength:'2', inputMode: 'numeric' }} value={formdata.rollNumber} onChange={(e) => setFormData({...formdata,rollNumber:e.target.value})}  fullWidth />
            </Stack>
        </Stack>
        <Stack spacing={2} mt={2}>
            <Stack direction='row' spacing={2}>
                <TextField label="Address Line 1" multiline fullWidth value={formdata.address1} onChange={(e) => setFormData({...formdata,address1:e.target.value})}/>
                <TextField label="Address Line 2" multiline fullWidth value={formdata.address2} onChange={(e) => setFormData({...formdata,address2:e.target.value})}/>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label="Landmark" fullWidth value={formdata.landmark} onChange={(e) => setFormData({...formdata,landmark:e.target.value})}/>
                <TextField label="City" fullWidth value={formdata.city} onChange={(e) => setFormData({...formdata,city:e.target.value})}/>
                <TextField label="Pincode" fullWidth value={formdata.pincode} onChange={(e) => setFormData({...formdata,pincode:e.target.value})}/>
            </Stack>
        </Stack>
        <Button variant="contained" onClick={handleUpdate}>Update</Button>
    </form>
  )
}

export default Form