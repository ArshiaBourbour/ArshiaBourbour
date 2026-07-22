import React from "react";

const Spiderman = () => {
  return (
    <>
      <div className="container center">
        <img src="/public/web.png" className="spider-web" />
        <div className="rope center">
          <div className="legs center">
            <div className="boot-l"></div>
            <div className="boot-r"></div>
          </div>
          <div className="costume center">
            <div className="spider">
              <div className="s1 center"></div>
              <div className="s2 center"></div>
              <div className="s3"></div>
              <div className="s4"></div>
            </div>
            <div className="belt center"></div>
            <div className="hand-r"></div>
            <div className="hand-l"></div>
            <div className="neck center"></div>
            <div className="mask center">
              <div className="eye-l"></div>
              <div className="eye-r"></div>
            </div>
            <div className="cover center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spiderman;
