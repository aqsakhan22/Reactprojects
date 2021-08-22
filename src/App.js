
import './App.css';


import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact>
         <div className="container panel">
      <h1>welcome to dashbaord</h1>
        <div className="row">

          <div className="col colbtn " >

          <button type="button" className="btn btn-success" >Employee</button>
          </div>
          <div className="col colbtn" >

       <Link to="/Talent"><button type="button" className="btn btn-success ">Talent</button></Link>   
          </div>
          <div className="col colbtn" >

          <button type="button" className="btn btn-success ">Admin</button>
          </div>
        </div>
     
        
      </div>
     
    
         </Route>
       
         {/* <Route path="/Talent"><Talent/></Route> */}
    {/* <Route path="/Employee"><EmployeeDasboard/></Route>
    <Route path="/Admin"><AdminDashboard/></Route> */}

       </Switch>
     </Router>
      
       
    </div>
  );
}

export default App;
