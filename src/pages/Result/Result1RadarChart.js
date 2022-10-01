import { useState } from "react";
import { Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const Result1RadarChart = (prop) => {
  Chart.register(...registerables);

  const [result, setResult] = useState(prop.result);

  // result에서 answer / problem * 100으로 백분율로 변경
  const percentByPart = {
    listening: Math.round(
      (result.Listening.answer / result.Listening.problem) * 100
    ),
    reading: Math.round((result.Reading.answer / result.Reading.problem) * 100),
    speaking: Math.round(
      (result.Speaking.answer / result.Speaking.problem) * 100
    ),
    writing: Math.round((result.Writing.answer / result.Writing.problem) * 100),
    grammar: Math.round((result.Grammar.answer / result.Grammar.problem) * 100),
  };

  console.log(percentByPart);

  const chartData = {
    labels: ["Listening", "Reading", "Speaking", "Writing", "Grammar"],
    datasets: [
      {
        label: "테스트 결과",
        backgroundColor: "#99A799",
        borderColor: "#83BD75",
        fill: false,
        radius: 6,
        data: [
          percentByPart.listening,
          percentByPart.reading,
          percentByPart.speaking,
          percentByPart.writing,
          percentByPart.grammar,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 100,
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ fontSize: "25px" }}>
      점수 그래프
      <div style={{ width: "400px", height: "400px" }}>
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Result1RadarChart;
