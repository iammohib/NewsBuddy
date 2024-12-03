import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [state, setState] = useState({ progress: 10 });

  const setProgress = (progress) => {
    setState({ progress: progress });
  };
  const pageSize = 2;
  const country = "us"
  return (
    <BrowserRouter>
      <div>
        <LoadingBar height={3} color="#000000" progress={state.progress} />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key={"general"}
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"general"}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key={"entertainment"}
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key={"business"}
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"business"}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key={"health"}
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"health"}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key={"science"}
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"science"}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key={"sports"}
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"sports"}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key={"technology"}
                pageSize={pageSize}
                country={country}
                apiKey={apiKey}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
