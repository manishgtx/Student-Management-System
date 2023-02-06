
const UserReducer = (state,action) => {
    switch (action.type) {
        case "INITIAL": {
            return {
                ...state,
                students: action.payload
            }
        }
        case "ADD": {
            return {
                ...state,
                students: [...state.students,action.payload]
            }
        }
        case 'UPDATE': {
            const newData = state.students.map((student)=> {
                if(student.rollNumber === action.payload.rollNumber){
                    return {...action.payload.data}
                }
                return student
            })
            return {
                ...state,
                students:[...state.students,]
            }
        }
        default:
            return state;
    }
    
}

export default UserReducer;