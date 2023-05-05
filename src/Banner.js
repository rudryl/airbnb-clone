import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";

function Banner() {
  const history = useHistory();
  const [showSearchCom, setShowSearchCom] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearchCom && <Search />}
        <Button
          onClick={() => setShowSearchCom(!showSearchCom)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearchCom ? "Hide" : "Search Date"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch you imagination</h1>
        <h5> try a different kind of gateways to uncover new gems </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
