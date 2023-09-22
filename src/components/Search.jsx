import { useState } from "react";
import "./Search.css";
import PropTypes from "prop-types";

const Search = ({ getSearchValue }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const changeInputHandler = (e) => {
    setError(false);
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      setError(true);
      return;
    } else {
      getSearchValue(value.trim().toLowerCase());
    }
  };

  return (
    <form className="search" onSubmit={(e) => submitHandler(e)}>
      <div>
        <input
          type="search"
          placeholder="🔍"
          value={value}
          onChange={(e) => changeInputHandler(e)}
        />
        {error && <div className="error">Please enter some text</div>}
      </div>
    </form>
  );
};

Search.propTypes = {
  getSearchValue: PropTypes.func.isRequired,
};

export default Search;
