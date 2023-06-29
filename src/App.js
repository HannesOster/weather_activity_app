import "./App.css";
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([{ id: "abc", name: "test" }]);
  const Weather = true;
  function handleAddActivity(activity) {
    console.log([...activities, { ...activity, id: uid() }]);
    setActivities([...activities, { ...activity, id: uid() }]);
  }

  return (
    <div className="App">
      <Header />

      <Form onAddActivity={handleAddActivity} />
      <ul>
        {activities
          .filter((activity) => activity.goodWeather === Weather)
          .map((activity) => {
            return <li>{activity.name}</li>;
          })}
      </ul>
    </div>
  );
}
function List() {
  <ul>{}</ul>;
}
export default App;
