const h1 = React.createElement("h1", {}, "Hi I am h1");
const children = React.createElement("div", { id: "child" }, h1);
const parent = React.createElement("div", { id: "parent" }, children);

function Time({ name, bored }) {
  return React.createElement("h1", {}, "Good", name, bored);
}
const element = React.createElement(Time, { name: "afternoon" });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
