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
          Activity: <input name="name" id="activity" type="text" />
        </label>

        <label htmlFor="goodweather">
          Good-weather activity:{" "}
          <input name="ifForGoodWeather" id="goodweather" type="checkbox" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
