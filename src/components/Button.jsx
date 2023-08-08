const Button = ({text, bgcolor, txcolor, bwidth, border, cursor, borderRadius}) => {
  return (
    <button
        style={{backgroundColor: bgcolor, color: txcolor, width: bwidth, border: border, cursor: cursor, borderRadius: borderRadius}}
    >
        {text}
    </button>
  )
}

Button.defaultProps={
    bgcolor: '#f68b1f',
    txcolor: '#fff',
    bwidth: '110px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px'
}

export default Button