import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../src/components/login';
import Content from "./components/content/content";
import Product from "./components/product/product";
import Addproduct from "./components/product/addproduct";
import UpdateProduct from "./components/product/UpdateProduct";
function App() {
  return (
    <div>
       <Router>
           <Switch>
               <Route exact={true} path="/" component={Login} />
               <Route  path="/welcome" component={Content} />
               <Route  path="/product" component={Product} ></Route>
               <Route  path="/add" component={Addproduct} ></Route>
               <Route  path="/update/:id" component={UpdateProduct} ></Route>
           </Switch>
       </Router>
    </div>
  );
}

export default App;
