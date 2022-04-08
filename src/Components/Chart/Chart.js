
import "./Chart.css"
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map(datapoint => datapoint.value)
    const MaxValue = Math.max(...dataPointsValue);

    return (
    <div className="chart">
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={MaxValue}
                label={dataPoint.label} />)}

    </div>
    )
};
export default Chart; 