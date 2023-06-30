import { ReactComponent as UmbrellaIcon } from "../../assets/icons/beach_access_black_24dp.svg";

function Chanceofrain() {
  return (
    <div className="detail-card-container chanceofrain">
      <div className="detail-card-header">
        <h3 className="detail-card-title">Chance of rain</h3>
        <span className="detail-card-icon-container">
          <UmbrellaIcon />
        </span>
      </div>
      <div className="number-container">
        <span className="value">42%</span>
      </div>
      <div className="chanceofrain-number-container">
        {[0, 25, 50, 75, 100].map((v) => (
          <span key={v}>{v}%</span>
        ))}
      </div>
      <div className="chanceofrain-svg-container">
        <svg
          className="progress"
          width="100%"
          height="23"
          viewBox="0 0 424 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="bg"
            d="M12 12.5H412"
            stroke="#CCCCCC"
            strokeWidth="23"
            strokeLinecap="round"
          />
          <path
            className="content"
            d="M12 12H412"
            stroke="#0099CC"
            strokeWidth="23"
            strokeLinecap="round"
            strokeDasharray="400"
            strokeDashoffset="220"
          />
        </svg>
      </div>
    </div>
  );
}

export default Chanceofrain;
