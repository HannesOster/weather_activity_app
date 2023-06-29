export default function WeatherScreening({ weather }) {
  return (
    <p>
      <span className="weather-icon">{weather.condition}</span>
      <span className="temperature">{weather.temperature}°C</span>
    </p>
  );
}
