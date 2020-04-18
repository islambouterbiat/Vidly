import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        name="query"
        type="text"
        className="form-control"
        placeholder="Search movies here ..."
      />
    </div>
  );
};

export default SearchBox;
