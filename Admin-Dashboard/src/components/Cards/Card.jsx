import React from "react";
import "./Card.css";
import { LayoutGroup as AnimateSharedLayout, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = ({
  id,
  title,
  color,
  barValue,
  value,
  png,
  series,
  isExpanded,
  onCardClick,
}) => {
  return (
    <AnimateSharedLayout>
      {isExpanded ? (
        <ExpandedCard
          param={{ id, title, color, barValue, value, png, series }}
          onCardClick={onCardClick}
        />
      ) : (
        <CompactCard
          param={{ id, title, color, barValue, value, png, series }}
          onCardClick={onCardClick}
        />
      )}
    </AnimateSharedLayout>
  );
};

function CompactCard({ param, onCardClick }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      layoutId={`compact-card-${param.id}`}
      onClick={() => onCardClick(param.id)}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`%${param.barValue}`}
        />
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, onCardClick }) {
  const Png = param.png;
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 10,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={`compact-card-${param.id}`}
      onClick={() => onCardClick(null)}
    >
      <div className="closeButton">
        <UilTimes onClick={() => onCardClick(null)} />
      </div>
      <span>{param.title}</span>
      <span>${param.value}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
    </motion.div>
  );
}

export default Card;
