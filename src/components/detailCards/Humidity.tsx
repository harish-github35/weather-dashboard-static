import "./styles.css";
import { ReactComponent as DropIcon } from "../../assets/icons/water_drop_black_24dp.svg";

function Humidity() {
  return (
    <div className="detail-card-container">
      <div className="detail-card-header">
        <h3 className="detail-card-title">Humidity</h3>
        <span className="detail-card-icon-container">
          <DropIcon />
        </span>
      </div>
      <div className="number-container">
        <span className="value">82%</span>
        <span className="text">bad</span>
      </div>
      <div className="hum-svg-container">
        <div className="names">
          <span>good</span>
          <span>normal</span>
          <span>bad</span>
        </div>
        <svg
          className="progress"
          width="100%"
          height="14"
          viewBox="0 0 383 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_28_196"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="383"
            height="14"
          >
            <path
              d="M7 7H97M147 7H237M286 7H376"
              stroke="#D4D9DB"
              strokeWidth="14"
              strokeLinecap="round"
            />
          </mask>
          <g mask="url(#mask0_28_196)">
            <path
              className="bg"
              d="M7 7H376"
              stroke="#CCCCCC"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <path
              className="content"
              d="M7 7H376"
              stroke="#0099CC"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray="369"
              strokeDashoffset="74"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Humidity;
