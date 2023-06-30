import { useState } from "react";
import { ReactComponent as PlusIcon } from "../../assets/icons/add_black_24dp.svg";
import { ReactComponent as LeftArrowIcon } from "../../assets/icons/navigate_before_black_24dp.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/navigate_next_black_24dp.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/near_me_black_24dp.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/wb_sunny_black_24dp.svg";
import bgImage from "../../assets/img/undraw_walking_outside_re_56xo.svg";
import "./styles.css";
import useSidebarContext from "../../useSidebarContext";

function Sidebar() {
  const [switchOn, setSwitchOn] = useState(false);
  const { show } = useSidebarContext();

  const handleSwitch = () => {
    setSwitchOn(!switchOn);
  };

  return (
    <div className={`sidebar-container ${show ? "show" : "hide"}`}>
      {/* buttons */}
      <div className="buttons-row">
        <button className="add-btn">
          <PlusIcon />
        </button>
        <div className="dots-container">
          <span className="dash"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="switch-btn-container" onClick={handleSwitch}>
          <span>&deg;C</span>
          <div className={`switch-btn ${switchOn ? "on" : ""}`}>
            <span className="bar"></span>
          </div>
          <span>&deg;F</span>
        </div>
      </div>

      {/* location, date */}
      <div className="location-container">
        <div className="location">
          <span className="location-icon">
            <LocationIcon />
          </span>
          <p>New York, USA</p>
          <p>07:19</p>
        </div>
        <div className="date">
          <p>Today 28 Sept</p>
          <p>19:32</p>
        </div>
      </div>

      {/* temperature */}
      <div className="temp-container">
        <span className="left-arrow">
          <LeftArrowIcon />
        </span>

        <div className="temp-text-container">
          <p className="temp-text">27&deg;</p>
          <div className="weather-text-container">
            <span className="weather-icon">
              <SunIcon />
            </span>
            <p className="weather-text">Sunny</p>
          </div>
        </div>

        <span className="right-arrow">
          <RightArrowIcon />
        </span>
      </div>

      {/* background image*/}
      <div className="bg-img-container">
        <img src={bgImage} alt="rain" />
      </div>
    </div>
  );
}

export default Sidebar;
