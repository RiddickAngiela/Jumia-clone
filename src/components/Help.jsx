import { BsQuestionCircle } from "react-icons/bs";

const Help = () => {
  return (
    <div style={helpStyle}>
        <BsQuestionCircle/>
        <span>Help</span>
    </div>
  )
}

const helpStyle={
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    fontSize: '20px'
}

export default Help