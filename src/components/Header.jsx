import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <div className="header">
      <h1>{text}</h1>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
