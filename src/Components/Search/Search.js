import React from "react";


function Search(props) {
  return (
    <form>
      <div className="form-group center " >
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control center"
          placeholder="Search Directory"
          id="search"
        />
        <br />

        <button onClick={props.setSearchName} className="center btn btn-flat waves-effect purple white-text" >
          Search
        </button>
        <br /> <br />  <br />  <br />
        <hr></hr>
      </div>
    </form>
  );
}

export default Search;
