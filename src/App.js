import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Counters from "./components/counters";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import Customers from "./components/customers";
import NavBar from "./components/common/navbar";
import MovieForm from "./components/movieform";
import LoginForm from "./components/common/loginform";
import RegisterForm from "./components/common/registerform";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 0 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };
  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  //   //console.log(this.state.counters[index]);
  // };
  // handleDecrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value--;
  //   this.setState({ counters });
  // };
  // counterDelete = (counterId) => {
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters });
  // };
  // countersReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
    // return (
    //   <React.Fragment>
    //     <Navbar
    //       totalCounters={this.state.counters.filter((c) => c.value > 0).length}
    //     />
    //     <main className="continer">
    //       <Counters
    //         counters={this.state.counters}
    //         onReset={this.countersReset}
    //         onDelete={this.counterDelete}
    //         onDecrement={this.handleDecrement}
    //         onIncrement={this.handleIncrement}
    //       />
    //     </main>
    //   </React.Fragment>
    // );
  }
}

export default App;
