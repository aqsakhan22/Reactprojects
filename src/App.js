import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home.js'
import AddEdit from './pages/AddEdit.js'
import About from './pages/About.js'
import View from './pages/View.js'
import Header from './components/Header.js'

import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
function App() {
  return (
    <Router>

      
      <div className="App">
      <Header/>
      <ToastContainer position="top-center"/>

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" exact component={AddEdit}></Route>
        <Route path="/update/:id" exact component={AddEdit}></Route>
        <Route path="/view/:id" exact component={View}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
