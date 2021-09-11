import React from 'react'
import { Bar } from "react-chartjs-2";
import styles from './BarChart.module.css'

function BarChart({ countries: { cases, deaths, recovered } ,countryData }) {
    // console.log(countries)
    console.log(countryData)
    const barChart = (
        <Bar
            data={{
                labels: ['Confirmed', 'Recovered', 'Deaths'],
                datasets: [{
                    label: countryData,
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.2)',
                        'rgba(0, 255, 0, 0.2)',
                        'rgba(84, 78, 77, 0.2)'
                    ],
                    borderColor:[
                        'rgba(255, 0, 0)',
                        'rgba(0, 255, 0)',
                        'rgba(84, 78, 77)'
                    ],
                    borderWidth: 1,
                    data: [cases, recovered, deaths]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ` }
            }}
        />
    );
    return (
        <div className={styles.container} >
            {barChart}
        </div>
    )
}

export default BarChart
