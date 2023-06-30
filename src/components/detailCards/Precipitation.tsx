import { ReactComponent as RainIcon } from "../../assets/icons/thunderstorm_black_24dp.svg";

function Precipitation() {
  return (
    <div className="detail-card-container prec">
      <div className="detail-card-header">
        <h3 className="detail-card-title">Precipitation</h3>
        <span className="detail-card-icon-container">
          <RainIcon />
        </span>
      </div>
      <div className="number-container">
        <span className="value">1.4cm</span>
      </div>
      <div className="prec-number-container">
        <span className="number">0</span>
        <span className="number">10</span>
        <span className="number">20</span>
        <span className="number">30</span>
        <span className="number">40</span>
        <span className="number">50</span>
        <span className="number">60</span>
        <span className="number">70</span>
        <span className="number">80</span>
        <span className="number">90</span>
      </div>
      <div className="prec-svg-container">
        <svg
          className="progress"
          width="100%"
          height="20"
          viewBox="0 0 430 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_38_118"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="430"
            height="23"
          >
            <path
              d="M0 11.5C0 5.14873 5.14873 0 11.5 0H22.5C28.8513 0 34 5.14873 34 11.5C34 17.8513 28.8513 23 22.5 23H11.5C5.14873 23 0 17.8513 0 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M88 11.5C88 5.14873 93.1487 0 99.5 0H110.5C116.851 0 122 5.14873 122 11.5C122 17.8513 116.851 23 110.5 23H99.5C93.1487 23 88 17.8513 88 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M44 11.5C44 5.14873 49.1487 0 55.5 0H66.5C72.8513 0 78 5.14873 78 11.5C78 17.8513 72.8513 23 66.5 23H55.5C49.1487 23 44 17.8513 44 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M396 11.5C396 5.14873 401.149 0 407.5 0H418.5C424.851 0 430 5.14873 430 11.5C430 17.8513 424.851 23 418.5 23H407.5C401.149 23 396 17.8513 396 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M352 11.5C352 5.14873 357.149 0 363.5 0H374.5C380.851 0 386 5.14873 386 11.5C386 17.8513 380.851 23 374.5 23H363.5C357.149 23 352 17.8513 352 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M308 11.5C308 5.14873 313.149 0 319.5 0H330.5C336.851 0 342 5.14873 342 11.5C342 17.8513 336.851 23 330.5 23H319.5C313.149 23 308 17.8513 308 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M264 11.5C264 5.14873 269.149 0 275.5 0H286.5C292.851 0 298 5.14873 298 11.5C298 17.8513 292.851 23 286.5 23H275.5C269.149 23 264 17.8513 264 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M220 11.5C220 5.14873 225.149 0 231.5 0H242.5C248.851 0 254 5.14873 254 11.5C254 17.8513 248.851 23 242.5 23H231.5C225.149 23 220 17.8513 220 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M176 11.5C176 5.14873 181.149 0 187.5 0H198.5C204.851 0 210 5.14873 210 11.5C210 17.8513 204.851 23 198.5 23H187.5C181.149 23 176 17.8513 176 11.5Z"
              fill="#A85A5A"
            />
            <path
              d="M132 11.5C132 5.14873 137.149 0 143.5 0H154.5C160.851 0 166 5.14873 166 11.5C166 17.8513 160.851 23 154.5 23H143.5C137.149 23 132 17.8513 132 11.5Z"
              fill="#A85A5A"
            />
          </mask>
          <g mask="url(#mask0_38_118)">
            <path
              className="bg"
              d="M0 11H430"
              stroke="#CCCCCC"
              strokeWidth="23"
            />
            <path
              className="content"
              d="M0 11H430"
              stroke="#0099CC"
              strokeWidth="23"
              strokeDasharray="430"
              strokeDashoffset="100"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Precipitation;
