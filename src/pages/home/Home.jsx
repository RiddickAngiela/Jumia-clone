import { Link } from "react-router-dom";
import { BsQuestionCircle } from 'react-icons/bs';
import { PiMoney } from 'react-icons/pi';
import { RiRefund2Line } from 'react-icons/ri';
import Advert from "../../components/Advert";
import NavBar from "../../components/NavBar"
import Text from "../../components/Text";
import Icon from "../../components/Icon";

const Home = () => {
  return (
    <div style={{ backgroundColor: '#aac5ff' }}>
      <div style={homeStyle}>
        <div style={oneStyle}>
          <div style={leftStyle}>
            <NavBar />
          </div>
          <div style={centerStyle}>center</div>
          <div style={rightStyle}>
            <div style={topStyle}>
              <Link to="/" style={itemStyle}>
                <Icon
                  icon={<BsQuestionCircle />}
                  fontSize="30px"
                  color="#fb9900"
                />
                <div style={descStyle}>
                  <Text text="HELP CENTER" color="black" />
                  <Text text="Guide To Customer Care" fontSize="13px" color="black" />
                </div>
              </Link>
              <Link to="/" style={itemStyle}>
                <Icon
                  icon={<RiRefund2Line />}
                  fontSize="30px"
                  color="#fb9900"
                />
                <div style={descStyle}>
                  <Text text="EASY RETURN" color="black" />
                  <Text text="Quick Refund" fontSize="13px" color="black" />
                </div>
              </Link>
              <Link to="/" style={itemStyle}>
                <Icon icon={<PiMoney />} fontSize="30px" color="#fb9900" />
                <div style={descStyle}>
                  <Text text="SELL ON JUMIA" color="black" />
                  <Text text="Millions Of Visitors" fontSize="13px" color="black" />
                </div>
              </Link>
            </div>
            <div style={bottomStyle}>
              <Advert />
            </div>
          </div>
        </div>
        <div className="row">row 1</div>
        <div className="row">row 2</div>
        <div className="row">row 3</div>
        <div className="row">row 4</div>
        <div className="row">row 5</div>
        <div className="row">row 6</div>
        <div className="row">row 7</div>
        <div className="row">row 8</div>
        <div className="row">row 9</div>
        <div className="row">row 10</div>
        <div className="row">row 11</div>
        <div className="row">row 12</div>
        <div className="row">row 13</div>
        <div className="row">row 14</div>
        <div className="row">row 15</div>
        <div className="row">row 16</div>
        <div className="row">row 17</div>
        <div className="row">row 18</div>
        <div className="row">row 19</div>
        <div className="row">row 20</div>
        <div className="row">row 21</div>
        <div className="row">row 22</div>
        <div className="row">row 23</div>
        <div className="row">row 24</div>
        <div className="row">row 25</div>
      </div>
    </div>
  );
}

const homeStyle = {
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: `min(330px)`,
  marginRight: `min(330px)`,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const oneStyle = {
  display: 'flex',
  gap: '20px',
  marginTop: '20px',
};

const leftStyle={
  flex: 1
}

const centerStyle = {
  flex: 3,
  backgroundColor: 'red',
  padding: '10px',
  borderRadius: '5px',
};

const rightStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',  
};

const topStyle = {
  flex: 1,
  backgroundColor: '#ffffff',
  borderRadius: '5px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const itemStyle={
  display: 'flex',
  gap: '10px',
  textDecoration: 'none',
}

const descStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const bottomStyle = {
  flex: 1,
  borderRadius: '5px',
};

export default Home