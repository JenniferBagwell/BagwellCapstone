export default st => `
<h3>Weather in ${st.weather.city}: ${
  st.weather.description
} // ${kelvinToFahrenheit(st.weather.temp)}F, feels like ${kelvinToFahrenheit(
  st.weather.feelsLike
)}F</h3>
<section id="csstransfer">
  <h2>Procode Bio Blog</h2>
  <a href="">"Sign up for alerts" "Button"</a>
</section>`;

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((18 - 273.15) * (9 / 5) + 32);
