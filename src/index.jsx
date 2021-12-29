import ReactDOM from "react-dom";

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

// コンポーネントは常に大文字からはじめなければ見つけてくれない
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const author = {
  avatarUrl:
    "https://ferret.akamaized.net/uploads/article/6845/eyecatch/default-95e77d8922603c5a64085258c0cc3f96.png",
  name: "sample",
};
const current = new Date();

const element = <Comment author={author} text="aaaaa" date={current} />;

ReactDOM.render(element, document.getElementById("root"));
