import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "Pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
