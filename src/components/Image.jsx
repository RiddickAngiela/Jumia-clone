const Image = ({image, cursor, width}) => {
  return (
    <img style={{width: width, cursor: cursor}} src={image} alt="" />
  )
}

Image.defaultProps={
    width: '100%',
    cursor: 'pointer',
}

export default Image