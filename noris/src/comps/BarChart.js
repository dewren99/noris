import React, {useState} from 'react';
import { Paper } from '@material-ui/core';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const DATA = [
  { year: '1950', population: 2.525 },
  { year: '1960', population: 3.018 },
  { year: '1970', population: 3.682 },
  { year: '1980', population: 4.440 },
  { year: '1990', population: 5.310 },
  { year: '2000', population: 6.127 },
  { year: '2010', population: 6.930 },
];

export default function BarChart({style}) {
    const [data, setData] = useState(DATA);

    return (
        <Paper style={{...style, padding:20}}>
            <Chart data={data}>
            <ArgumentAxis />
            <ValueAxis max={7} />
            <BarSeries valueField="population" argumentField="year"/>
            <Title text="World population" />
            <Animation />
            </Chart>
        </Paper>
    );
}
