import { Link } from "react-router-dom";
import Icon from "./Icon"
import Text from "./Text";
import { LuApple, LuSmartphone } from 'react-icons/lu';
import {
  PiBaby,
  PiTelevisionSimpleLight,
  PiPaintBrushHouseholdLight,
} from 'react-icons/pi';
import { IoGameControllerOutline, IoShirtOutline } from 'react-icons/io5';
import { CiDumbbell } from 'react-icons/ci';
import {
  HiOutlineComputerDesktop,
  HiOutlineEllipsisHorizontalCircle,
} from 'react-icons/hi2';
import { RiFridgeLine } from 'react-icons/ri';

const NavBar = () => {
  return (
    <div style={navStyle}>
      <Link to="/" style={itemStyle}>
        <Icon icon={<LuApple />} fontSize='15px' />
        <Text text="Supermarket" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<PiPaintBrushHouseholdLight />} />
        <Text text="Health &#38; Beauty" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<RiFridgeLine />} />
        <Text text="Home &#38; Office" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<RiFridgeLine />} />
        <Text text="Appliances" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<LuSmartphone />} />
        <Text text="Phones &#38; Tablets" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<HiOutlineComputerDesktop />} />
        <Text text="Computing" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<PiTelevisionSimpleLight />} />
        <Text text="TVs &#38; Audio" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<IoShirtOutline />} />
        <Text text="Fashion" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<IoGameControllerOutline />} />
        <Text text="Gaming" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<PiBaby />} />
        <Text text="Baby Products" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<CiDumbbell />} />
        <Text text="Sporting Goods" />
      </Link>
      <Link to="/" style={itemStyle}>
        <Icon icon={<HiOutlineEllipsisHorizontalCircle />} />
        <Text text="Other categories" />
      </Link>
    </div>
  );
}

const navStyle = {
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const itemStyle={
    display: 'flex',
    gap: '10px',
    textDecoration: 'none',
    fontWeight: '300',
    color: 'black'
}

export default NavBar
// LuApple