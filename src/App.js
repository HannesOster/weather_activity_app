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
        setWeather(data.isGoodWeather);
      } catch (error) {
        console.log("caught error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />

      <Form onAddActivity={handleAddActivity} />
      <ul>
        {activities
          .filter((activity) => activity.goodWeather === weather)
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
