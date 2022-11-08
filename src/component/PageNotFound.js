import React from "react";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
    const navigate = useNavigate();
    return (
      <div>
        <h1 style={{marginLeft: "19rem", marginBottom:"1rem", marginTop:"3rem"}}>404 Page not found</h1>
        <button onClick={() => navigate('/')} className="btn btn-primary" style={{marginLeft: "24rem", marginBottom:"1rem", marginTop:"3rem"}}>
                Go Back</button>
      </div>
    );
  }
