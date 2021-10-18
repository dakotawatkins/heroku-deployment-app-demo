import "./App.css";

function App() {
  const name = "Dakota";
const url = "https://www.thinkful.com/";
const linkText = "Thinkful";
const element = (
  <p>
    {" "}
    Hey, {name}! Please visit <a href={url}>{linkText}</a>.
  </p>
);

return element;
}

export default App;