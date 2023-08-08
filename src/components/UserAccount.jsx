import Account from "./Account"
import Help from './Help'
import Cart from './Cart'

const UserAccount = () => {
  return (
    <div style={accountStyle}>
      <Account/>
      <Help/>
      <Cart/>
    </div>
  )
}

const accountStyle={
  display: 'flex',
  gap: '5px',
}

export default UserAccount