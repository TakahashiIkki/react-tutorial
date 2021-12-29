import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // // JSではクラスのメソッドはデフォルトではバインドされない
    // // bindを忘れて、thisはundefinedになる
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      // この書き方は、render のたびに 新しいコールバック関数が作成される
      // 下層コンポーネントでpropsなどに使用していると下層コンポーネントでも再レンダリングされる
      // パフォーマンスの問題が出るかも
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
