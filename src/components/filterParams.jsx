import React, { Component } from "react";
class FilterParams extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="formControlRange">Pay rate/hr($)</label>
          <input
            type="range"
            className="form-control-range"
            id="formControlRange"
          />
        </div>
      </form>
    );
  }
}

export default FilterParams;
