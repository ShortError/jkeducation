import "../../App.css";
import styled from "styled-components";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const Result1Graph = (prop) => {
  Chart.register(...registerables);

  // 나중에 결과를 받아와서 사용
  const [result, setResult] = useState(prop.result);

  /**
   * @explain 그래프 y축을 영어로 변경하기 위함
   */
  const [yLabels, setYLabels] = useState({
    1: "Pre-A1",
    2: "A1",
    3: "A1+",
    4: "A2",
    5: "A2+",
    6: "B1",
    7: "B1+",
    8: "B2",
    9: "B2+",
    10: "C1",
  });

  const bardata = {
    labels: ["Writing", "Listening", "Speaking", "Reading"],
    datasets: [
      {
        label: "Your Level",
        backgroundColor: "#BAD7DF",
        data: [1, 2, 5, 6],
        borderColor: "white",
        borderWidth: 1,
        fill: true,
        mim: 1,
        max: 10,
      },
    ],
  };

  return (
    <div style={{ fontSize: "25px" }}>
      CEFR LEVEL 그래프
      <div style={{ width: "600px", height: "400px" }}>
        <Bar
          type="bar"
          data={bardata}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                ticks: {
                  callback: function (value, index, ticks) {
                    return yLabels[value];
                  },
                },
                suggestedMin: 1,
                suggestedMax: 10,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Result1Graph;
