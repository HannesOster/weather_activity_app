import "./App.css";
import Header from "./components/Header/index";
import Form from "./components/Form/index";
import { useState, useEffect } from "react";
import { uid } from "uid";
import List from "./components/List/index";
import WeatherScreening from "./components/WeatherScreening/index";

function App() {
  const [activities, setActivities] = useState([{ id: "abc", name: "test" }]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );

        const data = await response.json();
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
  function handleAddActivity(activity) {
    setActivities([...activities, { ...activity, id: uid() }]);
  }
  const filteredActivities = activities.filter(
    (activity) => activity.goodWeather === weather
  );
  return (
    <div className="App">
      <Header />
      <WeatherScreening weather={weather} />

      <List
        onDeleteActivity={handleDeleteActivity}
        activities={filteredActivities}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
