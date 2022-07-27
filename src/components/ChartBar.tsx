import "../global.css";

interface IChartBar {
  maxValue: number;
  value: number;
  label: string;
}

export const ChartBar = (props: IChartBar) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};
