export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const goodWeather = event.target.elements.isForGoodWeather.checked;
    onAddActivity({ ...data, goodWeather });
    event.target.reset();
  }
  return (
    <>
      <legend>Add new Activity</legend>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="activity">
          Activity: <input required name="name" id="activity" type="text" />
        </label>

        <label htmlFor="weather">
          Good-weather activity:{" "}
          <input name="isForGoodWeather" id="weather" type="checkbox" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
