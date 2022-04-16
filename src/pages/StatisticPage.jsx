import { Component } from 'react';
import { bitcoinService } from '../services/bitcoinService';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export class StatisticPage extends Component {
  state = {
    marketPrice: [],
    AverageBlockSize: [],
  };

  componentDidMount() {
    this.loadMarketPrice();
  }
  async loadMarketPrice() {
    const data = await bitcoinService.getMarketPrice();
    const marketPrice = data.values;
    this.setState({ marketPrice });
  }

  options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Market Price',
      },
    },
  };

  get data1() {
    const labels = this.state.marketPrice.map((item) =>
      new Date(item.x * 1000).toLocaleDateString()
    );

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'BTC Rate ',
          data: this.state.marketPrice.map((item) => item.y),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    };
    return data;
  }

  render() {
    return (
      <div className='statistic-page'>
        <div className='chart-box'>
          <Line className='chart' options={this.options1} data={this.data1} />;
        </div>
      </div>
    );
  }
}
