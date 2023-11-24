/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import './chart-component.css';

import { LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts';
import { DotIcon, SeeMoreIcon } from './components/svgs';

const ChartComponent = () => {
  const data = [
    {
      monthYear: "09/21'",
      uv: 1.5,
    },
    {
      monthYear: "10/21'",
      uv: 2,
    },
    {
      monthYear: "11/21'",
      uv: 2.6,
    },
    {
      monthYear: "12/21'",
      uv: 2.6,
    },
    {
      monthYear: "01/22'",
      uv: 2,
    },
  ];
  const yTicks = [1.0, 2.6];

  const CustomTick = ({ x, y, payload }) => {
    if (payload.index === data.length - 1) {
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
            {payload.value}
          </text>
        </g>
      );
    }
    return null;
  };

  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload } = props;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <circle cx="20" cy="20" r="20" stroke="black" strokeWidth="3" fill="red" />
      </svg>
    );
  };

  return (
    <div className="card-layout">
      <div className="card-inner-layout">
        <div className="first-row">
          <span>
            <DotIcon />
            <span className="heading">OPTIMAL</span>
          </span>
          <SeeMoreIcon />
        </div>
        <div className="second-row">
          <span className="heading2 color-black">ALP</span>
          <DotIcon />
          <span className="heading2 color-green">2 mmol/L</span>
        </div>
        <div className="chart-div">
          <LineChart
            width={320}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="monthYear"
              axisLine={{ strokeDasharray: '3 3' }}
              tick={<CustomTick />}
            />
            <YAxis
              type="number"
              domain={[1, 2.6]}
              ticks={yTicks}
              axisLine={false}
              tick={{
                color: '#77A06C',
                fontSize: '12px',
                fontWeight: '600',
              }}
            />
            <Line type="monotone" dataKey="uv" stroke="#8884D8" dot={<CustomizedDot />} />

            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor="#77A06C" />
                <stop offset="50%" stopColor="#77A06C" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#77A06C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x={55} y={5} width="75%" height={70} fill="url(#gradient)" fillOpacity={0.3} />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
