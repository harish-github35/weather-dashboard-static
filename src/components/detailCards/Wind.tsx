import "./styles.css";
import { ReactComponent as WindIcon } from "../../assets/icons/air_black_24dp.svg";

function Wind() {
  return (
    <div className="detail-card-container wind">
      <div className="detail-card-header">
        <h3 className="detail-card-title">Wind</h3>
        <span className="detail-card-icon-container">
          <WindIcon />
        </span>
      </div>
      <div className="wind-speed-svg-container">
        {/* <!-- semi circle --> */}
        <svg
          className="wind-speed-meter"
          width="237"
          height="118"
          viewBox="0 0 396 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_20_181"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="-1"
            y="0"
            width="397"
            height="208"
          >
            <path
              d="M102.156 36.9448C101.945 36.6843 101.739 36.4195 101.538 36.1506C81.4427 48.0279 63.7495 63.522 49.36 81.734C49.6359 81.9218 49.9078 82.1149 50.1758 82.3131C64.5095 64.1811 82.1363 48.7593 102.156 36.9448Z"
              stroke="black"
              strokeLinecap="round"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M147.301 17.7749C163.278 13.3578 180.113 10.9973 197.5 10.9973C215.946 10.9973 233.771 13.654 250.609 18.6047C250.64 18.2672 250.678 17.9316 250.722 17.5981C233.844 12.653 215.983 10 197.5 10C180.064 10 163.181 12.361 147.155 16.7799C147.21 17.1094 147.259 17.4412 147.301 17.7749Z"
              stroke="black"
              strokeLinecap="round"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M294.822 38.1291C295.051 37.88 295.274 37.6264 295.493 37.3683C314.751 49.0793 331.737 64.1381 345.64 81.734C345.364 81.9218 345.092 82.1149 344.824 82.3131C330.965 64.7809 314.026 49.7826 294.822 38.1291Z"
              stroke="black"
              strokeLinecap="round"
              strokeWidth="20"
              strokeLinejoin="round"
            />
            <path
              d="M370.56 125.909C379.862 148.095 385 172.449 385 198H386C386 172.294 380.827 147.794 371.463 125.477C371.165 125.627 370.864 125.771 370.56 125.909Z"
              stroke="black"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M23.5368 125.477C23.8345 125.627 24.1356 125.771 24.4399 125.909C15.138 148.095 10 172.449 10 198H9C9 172.294 14.1728 147.794 23.5368 125.477Z"
              stroke="black"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
          <g mask="url(#mask0_20_181)">
            <path
              className="bg"
              d="M386 198C386 94.1705 301.83 10 198 10C94.1705 10 10 94.1705 10 198"
              stroke="#C6BEBE"
              strokeWidth="20"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              className="meter"
              d="M386 198C386 94.1705 301.83 10 198 10C94.1705 10 10 94.1705 10 198"
              stroke="#207FC4"
              strokeWidth="20"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="590"
              strokeDashoffset="-260"
            />
          </g>
        </svg>

        {/* <!-- compass --> */}
        <svg
          className="wind-speed-compass"
          width="18"
          height="72"
          viewBox="0 0 18 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.8612 51L9.5 0L2.13879 51H16.8612Z" fill="none" />
          <path
            d="M9 72C13.9706 72 18 67.9706 18 63C18 58.0294 13.9706 54 9 54C4.02942 54 0 58.0294 0 63C0 67.9706 4.02942 72 9 72Z"
            fill="none"
          />
        </svg>

        {/* <!-- text --> */}
        <p className="wind-speed-text">8 km/h</p>
      </div>

      <div className="wind-speed-number-svg-container">
        {/* <!-- speed-numbers --> */}
        <svg
          className="wind-speed-number-svg"
          width="520"
          height="254"
          viewBox="0 0 520 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.03071 254C5.40799 254 3.41386 252.949 2.04832 250.846C0.682773 248.743 0 245.703 0 241.723C0 239.056 0.303455 236.817 0.910364 235.009C1.51727 233.177 2.4168 231.798 3.60894 230.871C4.82276 229.944 6.29668 229.481 8.03071 229.481C10.6751 229.481 12.6692 230.521 14.0131 232.601C15.3786 234.658 16.0614 237.688 16.0614 241.689C16.0614 244.357 15.758 246.607 15.1511 248.438C14.5441 250.27 13.6446 251.66 12.4525 252.61C11.2603 253.537 9.78641 254 8.03071 254ZM8.03071 251.592C9.85144 251.592 11.1953 250.79 12.0623 249.184C12.951 247.556 13.3954 245.058 13.3954 241.689C13.3954 238.298 12.951 235.822 12.0623 234.262C11.1953 232.68 9.85144 231.888 8.03071 231.888C6.23166 231.888 4.88779 232.68 3.9991 234.262C3.11041 235.845 2.66606 238.321 2.66606 241.689C2.66606 245.058 3.11041 247.556 3.9991 249.184C4.88779 250.79 6.23166 251.592 8.03071 251.592Z"
            fill="#888888"
          />
          <path
            d="M37.7801 136.434C36.5446 136.434 35.3091 136.241 34.0736 135.857C32.8598 135.473 31.7544 134.874 30.7573 134.06C30.4972 133.879 30.3238 133.664 30.2371 133.415C30.1504 133.167 30.1395 132.918 30.2046 132.669C30.2696 132.42 30.3888 132.217 30.5622 132.059C30.7356 131.878 30.9415 131.776 31.18 131.754C31.4401 131.731 31.711 131.821 31.9928 132.025C32.8815 132.68 33.8027 133.167 34.7564 133.483C35.7101 133.8 36.7072 133.958 37.7476 133.958C38.8097 133.958 39.72 133.754 40.4787 133.347C41.259 132.918 41.8442 132.33 42.2344 131.584C42.6462 130.815 42.8521 129.922 42.8521 128.905C42.8521 127.345 42.4186 126.067 41.5516 125.073C40.6846 124.078 39.4924 123.58 37.9752 123.58C37.0431 123.58 36.187 123.761 35.4066 124.123C34.6263 124.485 33.911 125.061 33.2608 125.853C33.1091 126.033 32.9248 126.192 32.7081 126.327C32.513 126.44 32.2854 126.497 32.0253 126.497C31.6568 126.497 31.3642 126.395 31.1474 126.192C30.9524 125.966 30.8548 125.672 30.8548 125.31V113.508C30.8548 113.079 30.9632 112.762 31.18 112.559C31.3967 112.332 31.7002 112.219 32.0903 112.219H43.1447C43.5566 112.219 43.86 112.321 44.0551 112.525C44.2719 112.728 44.3802 113.022 44.3802 113.406C44.3802 113.791 44.2719 114.085 44.0551 114.288C43.86 114.492 43.5566 114.593 43.1447 114.593H33.4884V124.123H32.7731C33.3366 123.173 34.117 122.45 35.114 121.953C36.1111 121.433 37.2274 121.173 38.4629 121.173C39.9151 121.173 41.1614 121.489 42.2019 122.122C43.2639 122.755 44.0768 123.648 44.6403 124.801C45.2256 125.932 45.5182 127.254 45.5182 128.769C45.5182 130.261 45.2039 131.584 44.5753 132.737C43.9467 133.89 43.058 134.794 41.9092 135.45C40.7604 136.106 39.3841 136.434 37.7801 136.434Z"
            fill="#888888"
          />
          <path
            d="M131.201 24.2142C130.811 24.2142 130.507 24.1124 130.29 23.9089C130.074 23.6829 129.965 23.3776 129.965 22.9933C129.965 22.6089 130.074 22.3263 130.29 22.1454C130.507 21.942 130.811 21.8402 131.201 21.8402H135.427V2.61133H136.825L132.111 5.86702C131.829 6.02528 131.558 6.09311 131.298 6.0705C131.06 6.04789 130.854 5.95745 130.681 5.79919C130.529 5.61832 130.42 5.41484 130.355 5.18875C130.29 4.94005 130.301 4.69135 130.388 4.44266C130.475 4.17135 130.659 3.94526 130.941 3.76439L135.427 0.678269C135.709 0.497397 135.98 0.350439 136.24 0.237395C136.5 0.12435 136.76 0.0678279 137.021 0.0678279C137.324 0.0678279 137.573 0.169568 137.768 0.373049C137.985 0.553919 138.093 0.847835 138.093 1.2548V21.8402H141.995C142.385 21.8402 142.689 21.942 142.905 22.1454C143.122 22.3263 143.231 22.6089 143.231 22.9933C143.231 23.4002 143.122 23.7055 142.905 23.9089C142.689 24.1124 142.385 24.2142 141.995 24.2142H131.201Z"
            fill="#888888"
          />
          <path
            d="M155.41 24.5194C152.788 24.5194 150.793 23.4681 149.428 21.3654C148.062 19.2628 147.38 16.2219 147.38 12.2427C147.38 9.57488 147.683 7.3366 148.29 5.52788C148.897 3.69656 149.796 2.31742 150.988 1.39045C152.202 0.463483 153.676 0 155.41 0C158.055 0 160.049 1.04001 161.393 3.12003C162.758 5.17745 163.441 8.20704 163.441 12.2088C163.441 14.8767 163.137 17.1263 162.531 18.9576C161.924 20.7889 161.024 22.1794 159.832 23.1289C158.64 24.0559 157.166 24.5194 155.41 24.5194ZM155.41 22.1115C157.231 22.1115 158.575 21.3089 159.442 19.7037C160.331 18.0758 160.775 15.5776 160.775 12.2088C160.775 8.81748 160.331 6.34181 159.442 4.78179C158.575 3.19916 157.231 2.40785 155.41 2.40785C153.611 2.40785 152.267 3.19916 151.379 4.78179C150.49 6.36441 150.046 8.84009 150.046 12.2088C150.046 15.5776 150.49 18.0758 151.379 19.7037C152.267 21.3089 153.611 22.1115 155.41 22.1115Z"
            fill="#888888"
          />
          <path
            d="M339.522 24.2142C339.045 24.2142 338.688 24.1011 338.449 23.875C338.233 23.6263 338.124 23.2985 338.124 22.8915C338.124 22.6428 338.178 22.4054 338.287 22.1794C338.417 21.9307 338.59 21.682 338.807 21.4333L346.09 13.2941C347.195 12.0506 347.986 10.9088 348.463 9.8688C348.962 8.80618 349.211 7.73225 349.211 6.64703C349.211 5.29049 348.81 4.26178 348.008 3.56091C347.228 2.83742 346.079 2.47568 344.562 2.47568C343.586 2.47568 342.665 2.63394 341.798 2.95047C340.931 3.26699 340.097 3.75308 339.295 4.40874C339.013 4.63483 338.753 4.73657 338.514 4.71396C338.298 4.69135 338.103 4.60092 337.929 4.44266C337.756 4.28439 337.637 4.08091 337.572 3.83221C337.506 3.58352 337.506 3.33482 337.572 3.08612C337.658 2.83742 337.832 2.61133 338.092 2.40785C338.937 1.68437 339.956 1.10784 341.148 0.678269C342.34 0.22609 343.554 0 344.789 0C346.328 0 347.629 0.248698 348.691 0.746095C349.753 1.24349 350.555 1.97828 351.097 2.95047C351.639 3.90004 351.91 5.0644 351.91 6.44354C351.91 7.39312 351.758 8.33139 351.455 9.25836C351.173 10.1627 350.728 11.0897 350.122 12.0393C349.536 12.9888 348.767 13.9723 347.813 14.9897L340.888 22.6202V21.8402H351.845C352.257 21.8402 352.56 21.942 352.755 22.1454C352.972 22.3263 353.08 22.6089 353.08 22.9933C353.08 23.4002 352.972 23.7055 352.755 23.9089C352.56 24.1124 352.257 24.2142 351.845 24.2142H339.522Z"
            fill="#888888"
          />
          <path
            d="M364.577 24.5194C361.954 24.5194 359.96 23.4681 358.595 21.3654C357.229 19.2628 356.546 16.2219 356.546 12.2427C356.546 9.57488 356.85 7.3366 357.457 5.52788C358.064 3.69656 358.963 2.31742 360.155 1.39045C361.369 0.463483 362.843 0 364.577 0C367.221 0 369.216 1.04001 370.559 3.12003C371.925 5.17745 372.608 8.20704 372.608 12.2088C372.608 14.8767 372.304 17.1263 371.697 18.9576C371.091 20.7889 370.191 22.1794 368.999 23.1289C367.807 24.0559 366.333 24.5194 364.577 24.5194ZM364.577 22.1115C366.398 22.1115 367.742 21.3089 368.609 19.7037C369.497 18.0758 369.942 15.5776 369.942 12.2088C369.942 8.81748 369.497 6.34181 368.609 4.78179C367.742 3.19916 366.398 2.40785 364.577 2.40785C362.778 2.40785 361.434 3.19916 360.545 4.78179C359.657 6.36441 359.212 8.84009 359.212 12.2088C359.212 15.5776 359.657 18.0758 360.545 19.7037C361.434 21.3089 362.778 22.1115 364.577 22.1115Z"
            fill="#888888"
          />
          <path
            d="M464.036 136.434C462.779 136.434 461.511 136.241 460.232 135.857C458.975 135.473 457.88 134.907 456.948 134.161C456.667 133.958 456.482 133.732 456.396 133.483C456.309 133.212 456.287 132.963 456.331 132.737C456.396 132.488 456.515 132.285 456.688 132.127C456.862 131.946 457.068 131.844 457.306 131.821C457.566 131.799 457.848 131.889 458.151 132.093C459.105 132.748 460.059 133.223 461.012 133.517C461.966 133.811 462.952 133.958 463.971 133.958C465.077 133.958 466.009 133.788 466.767 133.449C467.526 133.11 468.1 132.613 468.49 131.957C468.881 131.279 469.076 130.454 469.076 129.481C469.076 128.08 468.631 127.017 467.743 126.293C466.854 125.57 465.564 125.208 463.874 125.208H461.565C461.153 125.208 460.839 125.107 460.622 124.903C460.406 124.677 460.297 124.372 460.297 123.987C460.297 123.626 460.406 123.343 460.622 123.14C460.839 122.913 461.153 122.8 461.565 122.8H463.646C464.643 122.8 465.488 122.62 466.182 122.258C466.897 121.896 467.45 121.387 467.84 120.732C468.23 120.053 468.425 119.239 468.425 118.29C468.425 117.024 468.035 116.063 467.255 115.407C466.475 114.729 465.348 114.39 463.874 114.39C462.898 114.39 461.977 114.537 461.11 114.831C460.243 115.125 459.387 115.622 458.541 116.323C458.281 116.526 458.021 116.628 457.761 116.628C457.523 116.606 457.317 116.526 457.143 116.391C456.992 116.233 456.873 116.029 456.786 115.78C456.721 115.532 456.732 115.283 456.818 115.034C456.905 114.763 457.089 114.514 457.371 114.288C458.238 113.519 459.257 112.932 460.427 112.525C461.598 112.118 462.801 111.914 464.036 111.914C465.51 111.914 466.767 112.163 467.808 112.66C468.87 113.135 469.683 113.836 470.246 114.763C470.81 115.667 471.091 116.764 471.091 118.053C471.091 119.025 470.907 119.918 470.539 120.732C470.192 121.523 469.693 122.201 469.043 122.766C468.415 123.332 467.645 123.739 466.735 123.987V123.614C468.317 123.886 469.542 124.564 470.409 125.649C471.297 126.712 471.742 128.057 471.742 129.685C471.742 131.064 471.427 132.262 470.799 133.28C470.192 134.274 469.314 135.054 468.165 135.62C467.017 136.162 465.64 136.434 464.036 136.434Z"
            fill="#888888"
          />
          <path
            d="M483.791 136.434C481.169 136.434 479.175 135.382 477.809 133.28C476.443 131.177 475.761 128.136 475.761 124.157C475.761 121.489 476.064 119.251 476.671 117.442C477.278 115.611 478.177 114.232 479.37 113.305C480.583 112.378 482.057 111.914 483.791 111.914C486.436 111.914 488.43 112.954 489.774 115.034C491.139 117.092 491.822 120.121 491.822 124.123C491.822 126.791 491.519 129.04 490.912 130.872C490.305 132.703 489.405 134.094 488.213 135.043C487.021 135.97 485.547 136.434 483.791 136.434ZM483.791 134.026C485.612 134.026 486.956 133.223 487.823 131.618C488.712 129.99 489.156 127.492 489.156 124.123C489.156 120.732 488.712 118.256 487.823 116.696C486.956 115.113 485.612 114.322 483.791 114.322C481.992 114.322 480.648 115.113 479.76 116.696C478.871 118.279 478.427 120.754 478.427 124.123C478.427 127.492 478.871 129.99 479.76 131.618C480.648 133.223 481.992 134.026 483.791 134.026Z"
            fill="#888888"
          />
          <path
            d="M496.311 253.932C495.899 253.932 495.574 253.808 495.335 253.559C495.097 253.31 494.978 252.96 494.978 252.508V248.574H485.646C485.213 248.574 484.866 248.472 484.606 248.269C484.368 248.043 484.248 247.726 484.248 247.319C484.248 247.07 484.303 246.822 484.411 246.573C484.519 246.302 484.714 245.963 484.996 245.556L494.913 230.498C495.108 230.181 495.325 229.944 495.563 229.786C495.801 229.628 496.083 229.548 496.408 229.548C496.755 229.548 497.048 229.661 497.286 229.888C497.546 230.114 497.676 230.475 497.676 230.973V246.2H500.05C500.462 246.2 500.776 246.302 500.993 246.505C501.209 246.709 501.318 247.003 501.318 247.387C501.318 247.771 501.209 248.065 500.993 248.269C500.776 248.472 500.462 248.574 500.05 248.574H497.676V252.508C497.676 252.96 497.557 253.31 497.319 253.559C497.08 253.808 496.744 253.932 496.311 253.932ZM494.978 246.2V233.042H495.758L486.654 246.946V246.2H494.978Z"
            fill="#888888"
          />
          <path
            d="M511.969 254C509.347 254 507.352 252.949 505.987 250.846C504.621 248.743 503.939 245.703 503.939 241.723C503.939 239.056 504.242 236.817 504.849 235.009C505.456 233.177 506.355 231.798 507.548 230.871C508.761 229.944 510.235 229.481 511.969 229.481C514.614 229.481 516.608 230.521 517.952 232.601C519.317 234.658 520 237.688 520 241.689C520 244.357 519.697 246.607 519.09 248.438C518.483 250.27 517.583 251.66 516.391 252.61C515.199 253.537 513.725 254 511.969 254ZM511.969 251.592C513.79 251.592 515.134 250.79 516.001 249.184C516.89 247.556 517.334 245.058 517.334 241.689C517.334 238.298 516.89 235.822 516.001 234.262C515.134 232.68 513.79 231.888 511.969 231.888C510.17 231.888 508.826 232.68 507.938 234.262C507.049 235.845 506.605 238.321 506.605 241.689C506.605 245.058 507.049 247.556 507.938 249.184C508.826 250.79 510.17 251.592 511.969 251.592Z"
            fill="#888888"
          />
        </svg>
      </div>
    </div>
  );
}

export default Wind;
