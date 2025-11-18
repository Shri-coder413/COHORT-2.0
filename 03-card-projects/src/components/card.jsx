import React from "react";
import { Bookmark } from "lucide-react";

function card(props) {
  console.log(props.company);
  return (
    
    <div className="card">
      <div className="top">
        <img
          src={props.brandLogo}
          alt="brand-image"
        />
        <button>
          save <Bookmark size={12} strokeWidth={1.25} />
        </button>
      </div>
      <div className="center">
        <h3>
          {props.company} <span>{props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>
        <div className="tags">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>{props.pay}</h3>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}

export default card;
