import {useContext, useState} from 'react'
import { Stack,TextField, Typography,Button } from '@mui/material'
import {auth} from '../../src/firebase-config'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/UserContext';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../src/firebase-config';
const Login = () => {
    const {dispatch} = useContext(UserContext);
    const {dispatchAuth} = useContext(AuthContext)
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async() => {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        const user = res.user;
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        console.log(data)
        dispatchAuth({type:'LOGIN',payload:user})
        dispatch({type: 'INITIAL',payload:data.students})
        navigate('/dashboard');

      } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      }
    }
  return (
    <div className='login-form'>
        
        <Stack width={400} spacing={2} marginLeft='auto' marginRight='auto'>
        <Typography textAlign='center' variant='h3'>Login</Typography>
            <TextField placeholder='Enter Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField placeholder='Enter Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
            <Typography textAlign='center' variant='p'>Dont have an account? <Typography variant='body1' component="h4"><NavLink to='/signup'>Sign Up</NavLink></Typography></Typography>
        </Stack>
    </div>
  )
}

export default Login