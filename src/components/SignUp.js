import {useState} from 'react'
import { Stack,TextField, Typography,Button } from '@mui/material'
import {auth} from '../../src/firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';
import { setDoc, doc } from "firebase/firestore"; 
import {db} from '../../src/firebase-config';
const SignUp = ({setChoice}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);
    const handleLogin = async() => {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db,'users',res.user.uid),{
          timeStamp: serverTimestamp(),
          students:[]
        })
      } catch (err) {
        console.log(err)
      }
        
    }
  return (
    <div className='signup-form'>
        
        <Stack width={400} spacing={2} marginLeft='auto' marginRight='auto'>
        <Typography textAlign='center' variant='h3'>SignUp</Typography>
            <TextField placeholder='Enter Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField placeholder='Enter Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button variant="contained" onClick={handleLogin}>SignUp</Button>
            <Typography textAlign='center' variant='p'>Already have an account? <Typography variant='body1' component="h4"><NavLink to='/login'>Login</NavLink></Typography></Typography>
        </Stack>
    </div>
  )
}

export default SignUp