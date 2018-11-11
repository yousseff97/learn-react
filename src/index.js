
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./buttons.css"
const rootElement = document.getElementById("root");

/*
//initial codesandbox function
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

ReactDOM.render(<App />, rootElement);
*/
/*
//render element method 1 

function Pa(props) {
  return <p> {props.asba} </p>;
}
ReactDOM.render(<Pa asba="some text" />, document.getElementById("root"));
*/

/*
//render element method 2 with jsx
function Affiche(props) {
  return React.createElement("button", { type: "submit" }, "llllllll");
}

ReactDOM.render(<Affiche label="aaaaaaaa" />, rootElement);
*/
/*
//render element method 3 react’s createElement API
const inputForm = React.createElement(
  "form",
  { target: "_blank", action: "https://www.google.com" },
  React.createElement("div", null, "enter input then click search"),
  React.createElement("input", {
    type: "text",
    placeholder: "put sthing",
    className: "input"
  }),
  React.createElement(Button, { type: "submit", label: "search" })
);

function Button(props) {
  return <button type={props.type}>{props.label}</button>;
}

ReactDOM.render(inputForm, rootElement);
*/

/*
//jsx
//That is JSX. It’s a compromise that allows 
//us to write our React components in a syntax 
//similar to HTML, which is a pretty good deal.

const inputForm=<form class="pure-form" target="_blank" action="https://www.google.com">
<fieldset>
    <legend>A compact inline form</legend>
    <label><input type="text" placeholder="click to go to google.com"
     styles={{margin : '100000px'}}
    /></label>
    <Button label="google"  />
  </fieldset>
</form>;

function Button(props)
{
  return <button className="button button-3d button-action button-pill button-small"  type="submit" > { props.label } </button>
}

ReactDOM.render(inputForm,rootElement);
*/
/*
//Using JavaScript expressions in JSX
const Random=()=><div>
  { Math.floor(Math.random()*10) }
</div>

ReactDOM.render(<Random />,rootElement);

*/
/*
const ErrorMessage=({message,autreVariable})=><div><div style={ {color : 'yellow' , backgroundColor : 'red' } }>
{message}
</div>
<p>{autreVariable}</p>
</div>;

ReactDOM.render(<ErrorMessage message="erreur" autreVariable="var" />,rootElement);
*/