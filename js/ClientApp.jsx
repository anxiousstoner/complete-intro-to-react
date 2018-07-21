const MyTitle = function(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return React.createElement(
    "div",
    { id: "my-first-component" },
    React.createElement(MyTitle, {
      title: "Rick and Morty",
      color: "YellowGreen"
    }),
    React.createElement(MyTitle, {
      title: "Silicon Valley",
      color: "GreenYellow"
    }),
    React.createElement(MyTitle, { title: "Disjointed", color: "LimeGreen" }),
    React.createElement(MyTitle, { title: "Amazing Hotels", color: "Lime" }),
    React.createElement(MyTitle, { title: "Dude", color: "peru" })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
