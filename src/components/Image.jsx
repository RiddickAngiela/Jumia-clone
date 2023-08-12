const Image = ({image, cursor, width, height, objectFit, borderRadius}) => {
  return <img style={{height: height, objectFit: objectFit ,width: width, cursor: cursor, borderRadius: borderRadius}} src={image} alt="" />
}

Image.defaultProps={
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    objectFit: 'cover',
    borderRadius: '5px'
}

export default Image