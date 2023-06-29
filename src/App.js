import "./App.css";
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import { useState, useEffect } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([{ id: "abc", name: "test" }]);
  const [weather, setWeather] = useState(null);
  function handleAddActivity(activity) {
    console.log([...activities, { ...activity, id: uid() }]);
    setActivities([...activities, { ...activity, id: uid() }]);
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );

        const data = await response.json();
        console.log(data);
        setWeather(data);
      } catch (error) {
        console.log("caught error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <p>
        <span>{}</span>
      </p>
      <List items={activities} weather={weather.isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
function List({ items, weather }) {
  return (
    <ul>
      {items
        .filter((activity) => activity.goodWeather === weather)
        .map((activity) => {
          return <li>{activity.name}</li>;
        })}
    </ul>
  );
}
export default App;
