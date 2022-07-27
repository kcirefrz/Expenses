import { ChartBar } from "./ChartBar";

import "../global.css";

interface IChart {
  [dataPoints: string]: any;
}

interface IDataPoint {
  [dataPoint: string]: any;
}

export const Chart = (props: IChart) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: IDataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: IDataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
