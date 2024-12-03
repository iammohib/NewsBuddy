import React from "react";
import Loader from "./spinner.gif";

export default function Spinner() {
  return (
    <div className="text-center">
      <img className="my-3" src={Loader} alt="loading..." />
    </div>
  );
}
