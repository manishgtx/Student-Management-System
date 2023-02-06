import { AiFillEye,AiFillEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
const Row = ({firstName,lastName,class:std,rollNumber:rollNo}) => {
  return (
    <tr className='row'>
     <td>{firstName}</td>
     <td>{std}</td>
     <td>{rollNo}</td>
     <td className='td-icons'><AiFillEye className='eye'/><AiFillEdit className='edit'/><RiDeleteBin6Line className='delete'/></td>
    </tr>
  )
}

export default Row