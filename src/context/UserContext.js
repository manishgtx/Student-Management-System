import { createContext,useEffect,useReducer} from 'react'
import UserReducer from './UserReducer';
const INITIAL_STATE = {
    students: JSON.parse(localStorage.getItem('data')) || []
};
console.log(INITIAL_STATE)

export const UserContext = createContext(INITIAL_STATE);


export const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(UserReducer,INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem("data",JSON.stringify(state.students))
    },[state.students])
    console.log(state)
    return (
        <UserContext.Provider value={{students: state.students,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}