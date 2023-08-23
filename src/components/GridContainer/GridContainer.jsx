import React, { useState, useMemo } from 'react';
import GridInterior from '../GridInterior/GridInterior';
import GridOutline from '../GridOutline/GridOutline';
import Grid from '@mui/material/Grid';

const GridContainer = () => {
    const [topicY1, setTopicY1] = useState('');
    const [topicY2, setTopicY2] = useState('');
    const [topicY3, setTopicY3] = useState('');
    const [topicX1, setTopicX1] = useState('');
    const [topicX2, setTopicX2] = useState('');
    const [topicX3, setTopicX3] = useState('');



    // in a memo, select at random a value from unique packages and set it to a topic for each topic with no repeats
    useMemo(() => {

        // shuffle the array
        const yTopics = ['Largest Pop.', 'Largest Area','Highest Pop. Density']
        const xTopics = ['Africa', 'Europe', 'N. America']
        yTopics.sort(() => Math.random() - 0.5)
        xTopics.sort(() => Math.random() - 0.5)

        setTopicY1(yTopics[0])
        setTopicY2(yTopics[1])
        setTopicY3(yTopics[2])
        setTopicX1(xTopics[0])
        setTopicX2(xTopics[1])
        setTopicX3(xTopics[2])

    }, [])





    return (
        <div className="grid-container">
            <Grid container spacing={0} justifyContent={'space-evenly'}>
                <Grid item container spacing={0} justifyContent={'space-evenly'}>
                    <Grid item xs={0}>
                        <></>
                    </Grid>
                    <Grid item xs={0}>
                        <GridOutline topic={topicY1} isY />
                    </Grid>
                    <Grid item xs={0}>
                        <GridOutline topic={topicY2} isY />
                    </Grid>
                    <Grid item xs={0}>
                        <GridOutline topic={topicY3} isY />
                    </Grid>
                </Grid>
                <Grid item container spacing={.5} justifyContent={'space-evenly'} alignItems={'center'}>
                    <Grid item xs={0}>
                        <GridOutline topic={topicX1} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX1} topicY={topicY1} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX1} topicY={topicY2} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX1} topicY={topicY3} />
                    </Grid>
                </Grid>
                <Grid item container spacing={.5} justifyContent={'space-evenly'} alignItems={'center'}>
                    <Grid item xs={0}>
                        <GridOutline topic={topicX2} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX2} topicY={topicY1} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX2} topicY={topicY2} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX2} topicY={topicY3} />
                    </Grid>
                </Grid>
                <Grid item container spacing={.5} justifyContent={'space-evenly'} alignItems={'center'}>
                    <Grid item xs={0}>
                        <GridOutline topic={topicX3} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX3} topicY={topicY1} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX3} topicY={topicY2} />
                    </Grid>
                    <Grid item xs={0}>
                        <GridInterior topicX={topicX3} topicY={topicY3} />
                    </Grid>
                </Grid>
            </Grid>


        </div>
    );
};

export default GridContainer;
