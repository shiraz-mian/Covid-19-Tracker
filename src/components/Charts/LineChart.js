import React, { useEffect, useState } from 'react'
import { fetchChartData } from '../../api';
import { Line } from "react-chartjs-2";
import numeral from 'numeral';
import styles from './LineChart.module.css';

const options = {
    legend: {
        display: true,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};


const buildChartData = (data, casesTypes) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesTypes][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesTypes][date];
    }
    return chartData;
}

function LineChart({ casesTypes }) {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            let chartData = await fetchChartData();
            chartData = buildChartData(chartData, casesTypes);
            setData(chartData);
           // console.log(chartData);
        }
        fetchData();
    }, [casesTypes])

    const lineChart = (
        data?.length > 0 && (
            <Line
                data={{
                    datasets: [
                        {
                            backgroundColor: "rgba(204, 16, 52, 0.5)",
                            borderColor: "#CC1034",
                            data: data,
                            fill: true,
                            label: 'WorldWide Cases'
                        },
                    ],
                }}
                options={options}
            />
        )
    )
    return (
        <div className={styles.container} >
            {lineChart}
        </div>
    )
}

export default LineChart
