import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    // クラスのコンポーネントは常に props を引数として親クラスのコンストラクタを呼び出す必要があります。
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    // state を直接変更してはならない
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    // TODO: タイマーを設定したい
    // このコンポーネントが最初にDOMとして描画される時: マウント
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    // TODO: タイマーをクリアしたい
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
