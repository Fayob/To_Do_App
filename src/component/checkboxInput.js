import React from 'react'

const Checkbox = ({id, completed, checkboxHandler}) => {
  return (
    <div className='checkbox'>
      <input type="checkbox" checked={completed} onChange={() => checkboxHandler(id)} />
    </div>
  )
}

export default Checkbox