import React from "react";
import "./Create.css";

function Create() {
  return (
    <div className="create">
      <div className="create__card">
        <input className="create__inp" type="text" placeholder="Video Url" />
        <button className="create__btn">Create</button>
      </div>
    </div>
  );
}
export default Create;
