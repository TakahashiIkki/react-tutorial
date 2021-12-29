import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Concept } from "./concept"; //作成したpage1.jsを読み込んでいる
import { Tutorial } from "./tutorial";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Tutorial />} />
          <Route exact path="/concept" element={<Concept />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
