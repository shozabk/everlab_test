export interface TestResult {
  id: string;
  status: string;
  name: string;
  value: string;
  chartData: ChartData[];
}
interface ChartData {
  monthYear: string;
  uv: number;
}
