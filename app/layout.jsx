import React from "react";
const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>Learn Next Js</title>
      </head>
      <body>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
};

export default Layout;
