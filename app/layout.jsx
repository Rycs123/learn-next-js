import React from "react";

const layout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>Learn Next</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default layout;
