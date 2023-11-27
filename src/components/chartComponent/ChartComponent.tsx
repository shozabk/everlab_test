/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/self-closing-comp */
import { FC } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Line } from 'recharts';

import { DotIcon, SeeMoreIcon } from './components/svgs';
import chart from './ChartComponent.module.css';
import { TestResult } from './chart-component.type';

interface ChartComponentI {
  result: TestResult;
}

const greenColor = '#77A06C';
const redColor = '#FF6B6B';

const ChartComponent: FC<ChartComponentI> = ({ result }) => {
  const { value, chartData, status, name } = result;

  const yTicks = [1.0, 2.6];
  const CustomActiveDot: FC<any> = (props: any) => {
    const { cx, cy, stroke, payload, index } = props;
    const { uv, monthYear } = payload;
    const isLastPoint = index === chartData.length - 1;
    const selectedColor = '#221F20';
    const selectedFontColor = '#737985';

    if (isLastPoint) {
      return (
        <g>
          <circle cx={cx} cy={cy} r={6} stroke={selectedColor} fill="#fff" strokeWidth={2} />
          <line
            x1={cx}
            y1={cy + 5}
            x2={cx}
            y2={cy + uv * 5 + 50}
            stroke={selectedColor}
            strokeWidth={2}
            strokeDasharray="3 3"
          />
          <text
            x={cx}
            y={cy + uv * 5 + 60}
            textAnchor="middle"
            fill={selectedFontColor}
            style={{ fontSize: '10px', fontWeight: '600' }}
          >{`${monthYear}`}</text>
        </g>
      );
    }

    return <circle cx={cx} cy={cy} r={4} stroke={stroke} fill="white" strokeWidth={2} />;
  };

  return (
    <div className={chart.cardLayout}>
      <div className={chart.cardInnerLayout}>
        <div className={chart.firstRow}>
          <span>
            <DotIcon size={8} color={status === 'optimal' ? greenColor : redColor} />
            <span className={chart.heading}>{status}</span>
          </span>
          <SeeMoreIcon />
        </div>
        <div className={chart.secondRow}>
          <span className={`${chart.heading2} ${chart.colorBlack}`}>{name}</span>
          <DotIcon size={5} color="black" />
          <span
            className={`${chart.heading2} ${
              status === 'optimal' ? chart.colorGreen : chart.colorRed
            }`}
          >
            {value}
          </span>
        </div>
        <div className={chart.chartDiv}>
          <LineChart
            width={320}
            height={100}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="10 10" vertical={false} />
            <XAxis
              dataKey="monthYear"
              axisLine={{ strokeDasharray: '10 10', stroke: greenColor }}
              tick={false}
              style={{ color: greenColor }}
            />
            <YAxis
              type="number"
              domain={yTicks}
              ticks={yTicks}
              axisLine={false}
              style={{ color: greenColor }}
              tick={{
                fill: greenColor,
                fontSize: '12px',
                fontWeight: '600',
              }}
            />
            <Line type="monotone" dataKey="uv" stroke="#AFB4BF" dot={<CustomActiveDot />} />

            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%">
                <stop offset="0%" stopColor={greenColor} />
                <stop offset="50%" stopColor={greenColor} stopOpacity="0.3" />
                <stop offset="100%" stopColor={greenColor} stopOpacity="0" />
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
