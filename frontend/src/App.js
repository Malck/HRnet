import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
//import Header from "./Components/Header";
//import Employee from "./Pages/Employee/Employee";

function App() {
  return (    

      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route path="/*" element={<Error />} />
        </Routes>

      </Router>
   
  );
}

export default App;
/* 
<Provider store={store}>

<Header />

<Route path="/employee" element={<Employee />} caseSensitive/>

 </Provider>
*/