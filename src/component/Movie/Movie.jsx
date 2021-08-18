import React from "react";
import "./Movie.css";

export default function Movie({ Title, Year, imdbID, Type, Poster }) {
 
  return (
    <div id={imdbID} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {Poster === 'N/A' ? 
          <img
            className="activator"
            src={`https://via.placeholder.com/300x450?text=${Title}`}/>
         : 
          <img className="activator" src={Poster} />
        }
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
}
