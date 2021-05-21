import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import {
  Card,
  CardContent,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  flex: { display: 'flex' },
  paperContainer: {
    width: 150,
    paddingRight: 0,
    margin: 'auto',
  },
  paper: {
    textAlign: 'center',
    '& p:first-child': { padding: 10 },
  },
  time: {
    lineHeight: '30px',
    fontSize: 25,
  },
  graphContainer: { flexGrow: 1 },
  graph: { position: 'relative', height: '150px' },
});

interface Props {
  dateFrom: Date | number;
  dateTo: Date | number;
  timeSum: number;
  timeA: number;
  timeB: number;
  timeC: number;
  timeD: number;
}

export const Graph: React.VFC<Props> = (props) => {
  const { dateFrom, dateTo, timeSum, timeA, timeB, timeC, timeD } = props;
  const classes = useStyles();

  const type: ChartType = 'bar';
  const data: ChartData = {
    labels: ['稼働時間'],
    datasets: [
      {
        label: '案件A',
        data: [timeA],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
      {
        label: '案件B',
        data: [timeB],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
      {
        label: '案件C',
        data: [timeC],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
      {
        label: '案件D',
        data: [timeD],
        backgroundColor: ['rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `${new Date(dateFrom).toLocaleDateString()} ～ ${new Date(
          dateTo,
        ).toLocaleDateString()}`,
      },
      // tooltip: { enabled: false },
      // legend: { display: false },
    },
    indexAxis: 'y',
    scales: {
      y: {
        ticks: { display: false },
        stacked: true,
        beginAtZero: true,
      },
      x: { stacked: true, max: timeSum },
    },
  };

  return (
    <Card className={classes.flex}>
      <CardContent className={classes.paperContainer}>
        <Paper className={classes.paper}>
          <Typography>合計</Typography>
          <Divider />
          <Typography className={classes.time}>{timeSum}</Typography>
          <Typography>時間</Typography>
        </Paper>
      </CardContent>
      <CardContent className={classes.graphContainer}>
        <div className={classes.graph}>
          <Bar type={type} data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
};
