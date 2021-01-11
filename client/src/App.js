import React,{useEffect,useState} from 'react'
import './App.css';
import Jobs from './components/Jobs';

const JOB_API_URL = 'http://localhost:5000/jobs';


const fetchJobs = async(updateCb) =>{
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  updateCb(json)
  // console.log(json);
}

function App() {

  const [joblist,setJoblist] = useState([]);

  useEffect(() =>{
    fetchJobs(setJoblist);
  },[]);

  return (
    <div className="App">
        <Jobs jobs={joblist}/>
    </div>
  );
}

export default App;
