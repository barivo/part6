import React from "react";
import { connect } from "react-redux";
import { filterOn } from "../reducers/filterReducer";

const Filter = props => {
  const handleChange = event => {
    // input-field value is in variable event.target.value
    props.filterOn(event.target.value);
  };
  const style = {
    marginBottom: 10
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const mapDispatchToProps = {
  filterOn
};
const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);
export default ConnectedFilter;
