/* eslint-disable import/extensions */
// import { Line, LineChart } from 'recharts';
import { testResults } from '@/components/chartComponent/data';
import { Welcome } from '../components/Welcome/Welcome';
import ChartComponent from '@/components/chartComponent/ChartComponent';
import styles from './Home.module.css';

export function HomePage() {
  return (
    <>
      <Welcome />
      <div className={styles.resultContainer}>
        {testResults.map((result) => (
          <ChartComponent result={result} key={result.id} />
        ))}
      </div>
    </>
  );
}
