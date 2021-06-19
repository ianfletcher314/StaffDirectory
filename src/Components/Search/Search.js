import React from "react";
import "./style.css"

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Directory"
          id="search"
        />
        <br />

        <button onClick={props.setSearchName} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
