import { ReactComponent as TempIcon } from "../../assets/icons/thermostat_black_24dp.svg";

function Feelslike() {
  return (
    <div className="detail-card-container feelslike">
      <div className="detail-card-header">
        <h3 className="detail-card-title">Feels like</h3>
        <span className="detail-card-icon-container">
          <TempIcon />
        </span>
      </div>
      <div className="number-container">
        <span className="value">30&deg;</span>
      </div>
      <div className="feelslike-number-container">
        {[0, 25, 50].map((v) => (
          <span key={v}>{v}&deg;</span>
        ))}
      </div>
      <div className="feelslike-svg-container">
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
            strokeDashoffset="320"
          />
        </svg>
      </div>
    </div>
  );
}

export default Feelslike;
