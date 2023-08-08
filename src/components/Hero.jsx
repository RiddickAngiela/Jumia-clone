import Image from "./Image"
import Logo from "./../assets/Jumia-Logo.png"
import SearchBar from "./SearchBar"
import UserAccount from "./UserAccount"

const Hero = ({src, width}) => {
  return (
    <div style={heroStyle}>
        <div style={logoStyle}>
            <Image width='80%' image={src}/>
        </div>
        <div style={searchStyle}>
            <SearchBar/>
        </div>
        <div style={accountStyle}>
            <UserAccount/>
        </div>
    </div>
  )
}

Hero.defaultProps={
    src: Logo
}

const heroStyle={
    display: 'flex',
    height: '70px',
    alignItems: 'center',
}

const logoStyle={
    flex: 1,
}

const searchStyle={
    flex: 3,
}

const accountStyle={
    flex: 2,
}

export default Hero