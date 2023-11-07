import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div style={{width:"400px", height:"80px", fontSize:"30px", fontWeight:"700"}} className={`${logoClass ? logoClass : ""}`}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        {/* <img alt="" src={process.env.PUBLIC_URL + imageUrl} /> */}
        Talukder Group
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
