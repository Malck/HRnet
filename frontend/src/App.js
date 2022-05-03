import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {store} from "./Store/store"
import { Provider } from "react-redux";
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home';
import Header from "./Components/Header/Header";
import Employee from "./Pages/Employee/Employee";

function App() {
  return (    

    <Provider store={store}>

      <Router>

        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/employee" element={<Employee />} caseSensitive/>
          
          <Route path="/*" element={<Error />} />
        </Routes>

      </Router>

    </Provider>
   
  );
}

export default App;
