import React from "react";
import "./DisclaimerFooter.css";

const DisclaimerFooter = () => (
  <footer className="footer">
    <h4>Credits:</h4>
    <img
      id="tmdb_logo"
      src="https://www.themoviedb.org/assets/2/v4/logos/stacked-green-cae7a95e2590dbdde28284ac26245cb2792788838f5c498b892e8d01c183e6f3.svg"
      alt="TMDb Logo"
    />
    <p>
      This product uses the TMDb API but is not endorsed or certified by TMDb.
    </p>
  </footer>
);

export default DisclaimerFooter;
