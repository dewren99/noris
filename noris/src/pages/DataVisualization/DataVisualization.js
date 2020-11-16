import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react'
import BarChart from '../../comps/BarChart.js';
import LineChart from '../../comps/LineChart.js';
import PieChart from '../../comps/PieChart.js';

import './DataVisualization.css';

const Row = ({children}) => {
    return(
        <Paper style={{margin:15, padding:15, height:'auto', width:'100%', maxWidth:1200, border:'none', boxShadow:'none', backgroundColor:'transparent'}}>
            <Grid container direction="row"  justify="space-around" alignItems="center">
                {children}
            </Grid>
        </Paper>
    );
}

export default function DataVisualization() {
    return (
        <Grid container direction="column"  justify="center" alignItems="center" className="data-visualization-container">
            <Row>
                <PieChart/>
                <LineChart/>
            </Row>

            <Row>
                <PieChart/>
                <PieChart/>
                <PieChart/>
                <PieChart/>
            </Row>

            <Row>
                <BarChart style={{width:'100%'}}/>
            </Row>

            <Row>
                <LineChart style={{width:'100%'}}/>
            </Row>
        </Grid>
    )
}
