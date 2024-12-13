import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import * as d3 from 'd3'; // Imported as per requirements
import '../App.scss';

function Homepage() {
  const [chartData, setChartData] = useState(null);

  // Fetch chart data using Axios
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/chart-data') 
      .then((response) => {
        const data = response.data;
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: 'Sample Chart',
              data: data.values,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching chart data:', error));
  }, []);

  return (
    <main className="center" id="main">
      <div className="page-area">
        <article>
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
          </p>
        </article>

        <article>
          <h1>Alerts</h1>
          <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
        </article>

        <article>
          <h1>Results</h1>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they live happier lives... since they spend without guilt or fear...
            because they know it is all good and accounted for.
          </p>
        </article>

        <article>
          <h1>Free</h1>
          <p>
            This app is free!!! And you are the only one holding your data!
          </p>
        </article>

        <article>
          <h1>Chart</h1>
          {chartData ? <Bar data={chartData} /> : <p>Loading chart...</p>}
        </article>
      </div>
    </main>
  );
}

export default Homepage;
