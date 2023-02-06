import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import Row from "./Row"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
const Table = () => {
  const {students} = useContext(UserContext);
  console.log(students)
  
  return (
    <table className='manage-students'>
                    <tr className='table-header'>
                        <th className='table-head first-head'>Name</th>
                        <th className='table-head'>Class</th>
                        <th className='table-head'>Roll No.</th>
                        <th className='table-head last-head'>View/Edit/Delete</th>
                    </tr>
                    {students.map((student) => {
                      return <Row {...student}/>
                    })}
                </table>
  )
}

export default Table