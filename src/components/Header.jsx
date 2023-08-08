// import PropTypes from 'prop-types'
import HeaderGif from './../assets/header.gif'
import Image from './Image'
import Hero from './Hero'

const Header = ({ src }) => {
  return (
    <header style={headingStyle}>
        <div style={adStyle}>
            <div style={{margin: '0px 330px'}}>
                <Image image={src} /> 
            </div>             
        </div>  
        <div style={heroStyle}>
            <div style={{margin: '0px 330px'}}>
                <Hero/> 
            </div>             
        </div>   
    </header>
  )
}

Header.defaultProps={
    src: HeaderGif
}

const headingStyle={
    width: '100%',
}

const adStyle={
    backgroundColor: '#fb9900',
}

const heroStyle={
    backgroundColor: 'white'
}

export default Header