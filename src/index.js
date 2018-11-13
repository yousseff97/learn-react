
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
     styles={{ margin : '100000px' }}
    /></label>
    <Button label="google"  />
  </fieldset>
</form>;

function Button(props)
{
  return <button className="button button-3d button-action button-pill button-small"  type="submit" > { props.label } </button>
}

ReactDOM.render(inputForm ,rootElement);

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
/*
//Using a React element within {}

const MaybeError=({msg})=><div>
{msg && <ErrorMessage message={msg} />}
</div>

const ErrorMessage=({message})=><div style={ {color : 'yellow' , backgroundColor : 'red' } }>
{message}
</div>;

  ReactDOM.render(<MaybeError msg={ (Math.random()*2 > 1) ?'number >1':'' } />,rootElement);
  */

/*
  //Using an array map inside {}
 const Doubler=({ value=[1,2,3] })=><div>
{ value.map( e => e*2)}
 </div>;

ReactDOM.render(<Doubler  />,rootElement);
*/
/*
// Example 9 - Creating components using JavaScript classes

class Button extends React.Component
{

constructor(props){
super(props);
this.id=Date.now();
}

render()
{

  return <button id={this.id} >id= {this.id +"/"+ this.props.label} </button>
}

}
ReactDOM.render(<Button label="do nothing" />,rootElement);

*/

/*

class Button extends React.Component
{

  nombreAppuis=0;

  constructor(props){
super(props);
this.id=Date.now();
}

handleClick=()=>{
  console.log( `nombre appuis = ${ ++this.nombreAppuis } `);
}

render()
{
  // Wrong:
//   onClick={this.handleClick()}
//   Right:
//   onClick={this.handleClick}
  return (<button id={this.id}  onClick={ this.handleClick  } > {this.props.label} </button>);
}

}

ReactDOM.render(<Button label="do nothing" />,rootElement);

*/

/*


class Form extends React.Component
{


handleSubmit=(event)=>{
event.preventDefault();
console.log("form preventd");

}

render()
{

  return <form onSubmit={this.handleSubmit} >
<button type="submit" >submit</button>
  </form>;

}


}

ReactDOM.render(<Form />,rootElement);

*/


class CounterButton extends React.Component
{


state={
nombreAppuis:0,
time:Date.now()
}


handleClick=()=>{
this.setState((prevState)=>{
return { nombreAppuis : prevState.nombreAppuis + 1};
});

}

componentDidMount()
{

setInterval(()=>{ 
this.setState ({ time : Date.now() })  
},100);
}

 Button(props)
 {
   /*
  return <button className="button button-3d button-box button-jumbo"
   type={props.type}  onClick={ props.onClick}  ><i className="fa fa-thumbs-up">
   </i>
   </button>;
   */

   return   <button className="button button-3d button-action button-circle button-jumbo"><i className="fa fa-thumbs-up"></i></button>
;
}


render(){

return <div>
<this.Button  type="submit" onClick={ this.handleClick } />
<p>nombreAppuis={ this.state.nombreAppuis }</p>
<p>timestamp={ this.state.time }</p>
</div> ;


}

}

ReactDOM.render(<CounterButton />,rootElement);

