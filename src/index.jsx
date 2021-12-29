import ReactDOM from "react-dom";

// コンポーネントは常に大文字からはじめなければ見つけてくれない
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="sara" />;

ReactDOM.render(element, document.getElementById("root"));
