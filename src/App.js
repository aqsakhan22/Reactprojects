
import './App.css';
import { Students } from './Students';
import data  from './api/data';
import './student.css'








function App() {


  
  
  
  return (
    <div className="App">
     <div className="container">
     <h1 className="leaderboard">Leadersboard</h1>

        
      {/* <Students data={data} changeScore={changeScore}/>
         */}

<Students name={"aqsa khan"} university={"SSUET"} score={351} />
     <Students name={"sania khan"} university={"Jinnah University"} score={347} />
     <Students name={"umer khan"} university={"KPS"} score={330} />
       

</div>

    </div>
  );
}

export default App;
