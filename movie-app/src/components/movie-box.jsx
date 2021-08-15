import React, { useState } from "react";
import "../App.css";

function MovieBox({ movieInfo }) {
  const [link, setLink] = useState(false);
  const { Title, Poster } = movieInfo;
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div>
          {movieInfo ? (
            <div>
              <h1>{Title}</h1>
              <img
                src={Poster}
                onClick={() => setLink(!link)}
                style={{ cursor: "pointer" }}
              />
              {link ? (
                <div>
                  <a href={Poster} target="_blank">
                    {Poster}
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MovieBox;
