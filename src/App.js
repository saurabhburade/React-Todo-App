import React, { Fragment } from "react";
import AllTodo from "./components/AllTodo";
import "./app.css";
import Button from "@material-ui/core/Button";
class App extends React.Component {
  
 



  render() {
   return(
        <Fragment>
         
            <div className="App">
              <h1 id="heading">My Todo App</h1>
            
              <AllTodo />
            </div>
        <div className="footer">
         Made with  <span role="img" aria-label="aria-label">😍</span>  by Saurabh Burade
        </div>
        
        </Fragment>
      );
   
    }
  
}

export default App;
