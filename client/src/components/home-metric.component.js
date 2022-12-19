import { useEffect, useState } from "react";
import MetricChartBar from "./bar-metric.component";

const API_URI = "http://localhost:3000/api";

const HomeMetrics = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_URI + "/metrics");
      const data = await response.json();

      setMetrics(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-offset-3 mt-3">
            <MetricChartBar metrics={metrics} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMetrics;
