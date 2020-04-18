import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="ml-3">
        <h4>Counter {this.props.counter.id}</h4>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgesClass()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm "
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
  getBadgesClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
