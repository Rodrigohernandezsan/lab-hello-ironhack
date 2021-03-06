import React from "react";
import "./app.css";

const App = () => {
  return (
    <div>
      <section className="first-div">
        <nav>
          <img src="../images/ironhack-logo.svg"></img>
          <img src="../images/menu-top.svg"></img>
        </nav>

        {/* Blocked 1 */}


        <section>
          <div>
          <h1>Say hello to <br>
          </br>ReactJS</h1>
            <p>
              You will learn a frontend framework form scratch, to become an
              amazing developer.
            </p>
          </div>
          <button>Awesome!</button>
        </section>
      </section>

      {/* Blocked  */}

      <section className="second-div">
        <div className="detail-box">
          <img src="../images/icon1.png"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create UIs.</p>
        </div>
        <div className="detail-box">
          <img src="../images/icon2.png"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="detail-box">
          <img src="../images/icon3.png"></img>
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="detail-box">
          <img src="../images/icon4.png"></img>
          <h2>JSX</h2>
          <p>Statically-types, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
};

export default App;