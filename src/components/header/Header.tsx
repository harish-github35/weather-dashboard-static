import { ReactComponent as ThreeDotIcon } from "../../assets/icons/more_horiz_black_24dp.svg";
import UserImage from "../../assets/img/profile.jpg";
import useSidebarContext from "../../useSidebarContext";
import "./styles.css";

function Header() {
  const { setShow } = useSidebarContext();

  const handleClick = () => {
    console.log("menu clciked");
    setShow();
  };

  return (
    <header className="main-header">
      <div className="main-header-text">
        <h2>Welcome back Isabella</h2>
        <p>Check out today's weather information</p>
      </div>
      <nav>
        <div className="menu-icon-container" onClick={handleClick}>
          <ThreeDotIcon className="threedot-icon" />
        </div>
        <div className="profile-img-container">
          <img className="profile-img" src={UserImage} alt="profile image" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
