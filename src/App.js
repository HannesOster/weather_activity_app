import "./App.css";
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import { useState, useEffect } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([{ id: "abc", name: "test" }]);
  const [weather, setWeather] = useState({});

  function handleAddActivity(activity) {
    //console.log([...activities, { ...activity, id: uid() }]);
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
  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }
  return (
    <div className="App">
      <Header />
      <p>
        <span className="weather-icon">{weather.condition}</span>
        <span className="temperature">{weather.temperature}°C</span>
      </p>
      <List
        onDeleteActivity={handleDeleteActivity}
        activities={activities}
        weather={weather.isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}
function List({ activities, weather, onDeleteActivity }) {
  const filteredActivities = activities.filter(
    (activity) => activity.goodWeather === weather
  );
  return (
    <ul>
      {filteredActivities.map((activity) => {
        console.log("second log", activity);
        return (
          <li key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>❌</button>
          </li>
        );
      })}
    </ul>
  );
}
export default App;
