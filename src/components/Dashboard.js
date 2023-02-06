import {useState} from 'react'
import Tab from './Tab'
import { tabsdata } from '../meta/tabsdata'
import Table from './Table'
import Form from './Form'
import Edit from './Edit'
const Dashboard = () => {
    const [selected,setSelected] = useState(1);
    const [edit,setEdit] = useState(false)
    const show = () => {
        if(selected === 1) {
            return <Form/>
        }
        if(selected === 2){
            return edit ? <Edit/> : <Table/>
        }
    }
  return (
    <div className='dashboard'>
        <div className="items-container">
            <div className="wrap">
            <div className="tabs">
                {tabsdata.map((tabdata) => {
                    return <Tab key={tabdata.id} {...tabdata} selected={selected} setSelected={setSelected}/>
                })}
            </div>
            </div>
           
            <div className="switch">
                <div className="info">
                    <h4>Manage Students</h4>
                    <p>25 Jul 2022 16:10</p>
                </div>
                {show()}
            </div>
        </div>
    </div>
  )
}

export default Dashboard