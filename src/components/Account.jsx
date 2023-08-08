import { GoPerson } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";

const Account = () => {
  return (
    <div style={accountStyle}>
        <GoPerson/>
        <span>Account</span>
        <BiChevronDown/>
    </div>
  )
}

const accountStyle={
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    fontSize: '20px'
}

export default Account
