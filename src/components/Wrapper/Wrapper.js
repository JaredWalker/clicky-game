import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div className="row">
        <div className="Wrapper ">{props.children}</div>
    </div>
);

export default Wrapper;