import React, { useState } from "react";

const API_URI = "http://localhost:3000/api";

const MetricAdd = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const formRef = React.createRef();

  async function addNewMetric() {
    var metric = {
      name: name,
      value: value,
    };

    await fetch(API_URI + "/metrics", {
      method: "POST",
      headers: {
        Content: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metric),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        alert(json?.status);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-md-offset-3">
          <h2 className="mt-4">Add new metric</h2>
        </div>
      </div>
      <form ref={formRef}>
        <div className="row">
          <div className="col-md-12 col-md-offset-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-3">
            <label htmlFor="name" className="form-label">
              Value
            </label>
            <input
              type="number"
              className="form-control"
              defaultValue={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-3 mt-3">
            <button
              onClick={addNewMetric}
              className="btn btn-success"
              disabled={value === "" || name === ""}
            >
              Save metric
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MetricAdd;
