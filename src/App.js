
import './App.css';
import { Questionare } from './Questionare ';

const appStyle={
 "color":'#AED6F1 ',
 "font-family": "Times New Roman, Times, serif",
 "font-weight": "bold"
}
function App() {
  
  return (
    <div className="App">

  <h1 style={appStyle}>QUIZ APP</h1>
         
       <Questionare/>
           
    </div>
  );
}

export default App;
