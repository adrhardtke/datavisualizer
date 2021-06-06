import React, { useState } from 'react'
import { Doughnut, Bar } from 'react-chartjs-2';

type GraphicProps = {
  label: string,
  labels: string[]
  data: number[],
}

const Graphic1: React.FC<GraphicProps> = ({label, labels, data}) => {
    
  const graphicData = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels,
    type: 'bar',
    datasets: [
      {
        // label: '# of Votes',
        label,
        // data: [12, 19, 3, 5, 2, 3],
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

    return (
        <Bar data={graphicData} type="bar" />
    )
}

export default Graphic1