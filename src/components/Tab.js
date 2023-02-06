import React from 'react'

const Tab = ({title,icon,selected,setSelected,id}) => {
  return (
    <div className={`tab ${selected === id && 'active'}`} onClick={() => setSelected(id)}>
        <span>{icon}</span>
        <p>{title}</p>
    </div>
  )
}

export default Tab