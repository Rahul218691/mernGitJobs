import React from 'react'
import {Typography,Paper} from '@material-ui/core';

const ONE_DAY_MS = 24*3600*1000;

function getMDY(ts) {
    return ts.toDateString().split(' ').slice(0,3).join(' ')
}

function makeDate(timestamp) {
    const date = new Date(timestamp);
    const dateStr =  getMDY(date);
    const todayStr = getMDY(new Date());
    const yesterdayStr = getMDY(new Date(Date.now() - ONE_DAY_MS));
    if (dateStr === todayStr) {
        return 'today';
    } else if (dateStr === yesterdayStr) {
        return 'yesterday';
    } else {
        return dateStr;
    }
}

function Job({job,onClick}) {
    return (
       <Paper className="job" onClick={onClick}>
           <div>
           <Typography variant='h6'>{job.title}</Typography>
           <Typography variant='h5'>{job.company}</Typography>
           <Typography>{job.location}</Typography>
           </div>
           <div>
           <Typography>Posted - {makeDate(job.created_at)}</Typography>
           </div>
       </Paper>
    )
}

export default Job
