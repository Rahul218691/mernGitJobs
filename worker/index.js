var CronJob = require('cron').CronJob;
const fetchGithub = require('./tasks/fetchGitjob');

var job = new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');
job.start();