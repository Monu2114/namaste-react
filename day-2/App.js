import React from "react";
import ReactDOM from "react-dom/client";
import koala from "./images/koala.jpg";

const h1 = React.createElement("h1", {}, "Hi I am h1");
console.log(h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

// using jsx
const jsxheading = <h1>Hii jsx bla bla</h1>;
root.render(jsxheading);

const ReactComponent = () => {
  return <h2>React component</h2>;
};
console.log(ReactComponent());
console.log(<ReactComponent />);
root.render(ReactComponent());

// react component
// class based component - old
// functional component - new

const Header = () => {
  return (
    <div className="header">
      <img src={koala} alt="koala" width="200" />
      {console.log("koala import:", koala)}

      <input type="text" />
      <img src={koala} alt="" />
    </div>
  );
};
root.render(<Header />);
