import React, { Children } from "react";

const BlogLayout = ({ children }) => {
  return (
    <div style={{ display: "row" }}>
      <div style={{ color: "red" }}>BlogLayout</div>
      <div>{children}</div>
    </div>
  );
};

export default BlogLayout;
