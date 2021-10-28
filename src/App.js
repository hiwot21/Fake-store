import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProductsPage from "./component/product/ProductsPage";
import ProductDetails from "./component/product/ProductDetails";

import Checkout from "./component/checkout/Checkout";
import Payment from "./component/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Nav from "./component/header/Nav";
// import Category from "./component/product/Category";
// import Mainproducts from "./component/product/Mainproducts";

const promise = loadStripe(
  "pk_test_51JJVbSAzGqlb7VWqJA96Zv3MWmAJicf4ZCP06YCW850zIB3NaTiOxRDwSrIdcVL5If92k9CDu1CMZJY8kCNRLtKb005Ayd6N2x"
);
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/productdetail">
            <ProductDetails />
          </Route>
          <Route path="/cart">
            <Checkout />
          </Route>
          <Route path="/checkout">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <ProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
