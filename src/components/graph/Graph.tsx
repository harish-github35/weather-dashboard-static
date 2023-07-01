import "./styles.css";
import { ReactComponent as SunIcon } from "../../assets/icons/wb_sunny_black_24dp.svg";
import { ReactComponent as CloudIcon } from "../../assets/icons/wb_cloudy_black_24dp.svg";
import { ReactComponent as MoreDownIcon } from "../../assets/icons/expand_more_black_24dp.svg";
import { ReactComponent as MoreRIghtIcon } from "../../assets/icons/chevron_right_black_24dp.svg";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "@mantine/hooks";

const graphData = [
  {
    time: "Now",
    icon: "sunny",
    temp: 27,
    percentage: 23,
  },
  {
    time: "11:00",
    icon: "sunny",
    temp: 28,
    percentage: 28,
  },
  {
    time: "12:00",
    icon: "cloudy",
    temp: 28,
    percentage: 58,
  },
  {
    time: "13:00",
    icon: "cloudy",
    temp: 29,
    percentage: 75,
  },
  {
    time: "14:00",
    icon: "sunny",
    temp: 30,
    percentage: 33,
  },
  {
    time: "15:00",
    icon: "cloudy",
    temp: 29,
    percentage: 20,
  },
  {
    time: "16:00",
    icon: "cloudy",
    temp: 29,
    percentage: 73,
  },
  {
    time: "17:00",
    icon: "sunny",
    temp: 28,
    percentage: 49,
  },
];

function Graph() {
  const matches = useMediaQuery("(max-width: 550px)");
  const responsiveGraphData = matches ? graphData.slice(0, 5) : graphData;

  const data: { name: string; d: number }[] = responsiveGraphData.map((g) => ({
    name: g.percentage + "%",
    d: g.percentage,
  }));

  return (
    <div className="graph-container">
      <div className="graph-header">
        <h2>Upcoming hours</h2>
        <div className="btn-group">
          <button disabled>
            Rain precipitation
            <span>
              <MoreDownIcon />
            </span>
          </button>
          <button>
            Next days
            <span>
              <MoreRIghtIcon />
            </span>
          </button>
        </div>
      </div>
      <div className="graph">
        <div className="top-axis">
          {responsiveGraphData.map((g) => (
            <div className="top-axis-item" key={g.time}>
              <p className="graph-time">{g.time}</p>
              <span className="graph-icon">
                {g.icon === "sunny" ? <SunIcon /> : <CloudIcon />}
              </span>
              <p className="graph-temp">{g.temp}&deg;</p>
            </div>
          ))}
        </div>
        <div className="responsive-graph-container">
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: 20,
                bottom: 0,
              }}
            >
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" dy={10} fontSize="1.3rem" tickMargin={4} />
              <Area
                type="linear"
                dataKey="d"
                stroke="#5C9CE5"
                fill="#5C9CE5"
                fillOpacity="1"
                strokeWidth={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Graph;
