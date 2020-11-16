import React, {useState} from 'react';
import { Paper } from '@material-ui/core';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const DATA = [
  { country: 'Russia', area: 12 },
  { country: 'Canada', area: 7 },
  { country: 'USA', area: 7 },
  { country: 'China', area: 7 },
  { country: 'Brazil', area: 6 },
  { country: 'Australia', area: 5 },
  { country: 'India', area: 2 },
  { country: 'Others', area: 55 },
];
export default function PieChart({style}) {
  const [data, setData] = useState(DATA);

  return (
    <Paper style={{...style, margin:10}}>
      <Chart data={data}>
        <PieSeries valueField="area" argumentField="country"/>
        <Title text="Area of Countries"/>
        <Animation />
      </Chart>
    </Paper>
  );
}
