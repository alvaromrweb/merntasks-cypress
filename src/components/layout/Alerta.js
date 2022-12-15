import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <>
        { alerta && ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> )}
    </>
  )
}

export default Alerta