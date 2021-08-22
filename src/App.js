
import { About } from './About';
import './App.css';
import { Header } from './Header';
import { Nav } from './Nav';
import { Portfolio } from './Portfolio';
import { Services } from './Services';
import { Team } from './Team';
import {Clients} from './Clients'
import { Footer } from './Footer';


function App() {
  
  return (
    <div className="App">
         
         <Nav/>
         <Header/>
         <Services/>
         <Portfolio/>


  
  {/* <About/> */}
     <Team/>
 <Clients/>
   <Footer/>
    
 

 
        
        
        
        
       
    </div>
  );
}

export default App;
