// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import {viewmedicinedetails} from './viewmedicinedetails';
// import {Home} from './Home';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       Medicine and Medical Equipment Selling Platform
     </h3>

     {/*<Navigation/>*/}

     <Switch>
       <Route path='/' component={viewmedicinedetails}/>
       {/* <Route path='/login' component={login}/>
       <Route path='/home' component={Home} exact/> */}
       
       
       
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;