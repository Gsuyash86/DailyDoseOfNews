import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" />

      <button className="btn btn-sm btn-warning" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
}
