/* eslint-disable import/extensions */
// import { Line, LineChart } from 'recharts';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import ChartComponent from '@/components/chartComponent/ChartComponent';

// const data = [
//   { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
//   { name: 'Page A', uv: 400, pv: 3243, amt: 234234 },
// ];

export function HomePage() {
  // const renderLineChart = (
  //   <LineChart width={400} height={400} data={data}>
  //     <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  //   </LineChart>
  // );

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <ChartComponent />
    </>
  );
}
