import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
  return (
    <div style={cartStyle}>
        <MdOutlineShoppingCart/>
        <span>Cart</span>
    </div>
  )
}

const cartStyle={
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    fontSize: '20px'
}

export default Cart