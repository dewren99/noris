import React, {useState} from 'react';
import { Paper } from '@material-ui/core';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';

const format = () => tick => tick;

const legendStyles = () => ({
    root: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'row',
    },
});
const legendRootBase = ({ classes, ...restProps }) => (
<Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);

export default function LineChart({style}){
    const [data, setData] = useState(DATA);

    return (
        <Paper style={{...style}}>
            <Chart data={data}>
                <ArgumentAxis tickFormat={format} />
                <ValueAxis max={50}/>

                <LineSeries name="News" valueField="tvNews" argumentField="year"/>
                <LineSeries  name="Church" valueField="church" argumentField="year"/>
                <LineSeries name="Military" valueField="military" argumentField="year"/>
                <Legend rootComponent={Root} position="bottom"/>
                <Title text={`Confidence in Institutions in American society ${'\n'}(Great deal)`}/>
                <Animation />
            </Chart>
        </Paper>

    );
}


export const DATA = [
    {
      year: 1993, tvNews: 19, church: 29, military: 32,
    }, {
      year: 1995, tvNews: 13, church: 32, military: 33,
    }, {
      year: 1997, tvNews: 14, church: 35, military: 30,
    }, {
      year: 1999, tvNews: 13, church: 32, military: 34,
    }, {
      year: 2001, tvNews: 15, church: 28, military: 32,
    }, {
      year: 2003, tvNews: 16, church: 27, military: 48,
    }, {
      year: 2006, tvNews: 12, church: 28, military: 41,
    }, {
      year: 2008, tvNews: 11, church: 26, military: 45,
    }, {
      year: 2010, tvNews: 10, church: 25, military: 44,
    }, {
      year: 2012, tvNews: 11, church: 25, military: 43,
    }, {
      year: 2014, tvNews: 10, church: 25, military: 39,
    }, {
      year: 2016, tvNews: 8, church: 20, military: 41,
    }, {
      year: 2018, tvNews: 10, church: 20, military: 43,
    },
  ];
  