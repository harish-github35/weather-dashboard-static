import { ReactComponent as SunIcon } from "../../assets/icons/wb_sunny_black_24dp.svg";

function Uv() {
  return (
    <div className="detail-card-container uv">
      <div className="detail-card-header">
        <h3 className="detail-card-title">UV index</h3>
        <span className="detail-card-icon-container">
          <SunIcon />
        </span>
      </div>
      <div className="number-container">
        <span className="value">4</span>
        <span className="text">medium</span>
      </div>
      <div className="uv-number-container">
        <span>0-2</span>
        <span>3-5</span>
        <span>6-7</span>
        <span>8-10</span>
        <span>11+</span>
      </div>
      <div className="uv-svg-container">
        <svg
          className="progress"
          width="100%"
          height="23"
          viewBox="0 0 472 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_42_151"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="472"
            height="23"
          >
            <path
              d="M98 11.5C98 5.14873 103.149 0 109.5 0H166.5C172.851 0 178 5.14873 178 11.5C178 17.8513 172.851 23 166.5 23H109.5C103.149 23 98 17.8513 98 11.5Z"
              fill="#D9D9D9"
            />
            <path
              d="M196 11.5C196 5.14873 201.149 0 207.5 0H264.5C270.851 0 276 5.14873 276 11.5C276 17.8513 270.851 23 264.5 23H207.5C201.149 23 196 17.8513 196 11.5Z"
              fill="#D9D9D9"
            />
            <path
              d="M0 11.5C0 5.14873 5.14873 0 11.5 0H68.5C74.8513 0 80 5.14873 80 11.5C80 17.8513 74.8513 23 68.5 23H11.5C5.14873 23 0 17.8513 0 11.5Z"
              fill="#D9D9D9"
            />
            <path
              d="M392 11.5C392 5.14873 397.149 0 403.5 0H460.5C466.851 0 472 5.14873 472 11.5C472 17.8513 466.851 23 460.5 23H403.5C397.149 23 392 17.8513 392 11.5Z"
              fill="#D9D9D9"
            />
            <path
              d="M294 11.5C294 5.14873 299.149 0 305.5 0H362.5C368.851 0 374 5.14873 374 11.5C374 17.8513 368.851 23 362.5 23H305.5C299.149 23 294 17.8513 294 11.5Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_42_151)">
            <line
              className="bg"
              x1="1.00536e-06"
              y1="11.5"
              x2="472"
              y2="11.5"
              stroke="#CCCCCC"
              strokeWidth="23"
            />
            <path
              className="content"
              d="M0 12H472"
              stroke="#0099CC"
              strokeWidth="23"
              id="ofp"
              strokeDasharray="472"
              strokeDashoffset="320"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Uv;
