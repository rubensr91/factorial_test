import React from "react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

function MetricChartBar(props) {
  const metrics = props.metrics;

  const data = {
    labels: metrics?.map((metric) => metric.timestamp),
    datasets: [
      {
        label: "Value",
        data: metrics?.map((metric) => metric.value),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  if (!metrics || metrics.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-offset-3 text-center">
            <h3>No data yet, please add some metrics.</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Bar
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Metrics Factorial",
          },
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
export default MetricChartBar;
