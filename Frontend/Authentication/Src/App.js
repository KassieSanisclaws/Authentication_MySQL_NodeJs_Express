import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navbar from "./Components/NavBar/index";
import LoginScreen from './Components/Screens/Login';
import Footer from "./Components/Footer/index";



const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content">
        <Switch>
          <Route path="/">
            <main>
               <LoginScreen />
            </main>
             
          </Route>
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </div>
      </div>
    </Router>
  )
};

export default App;




