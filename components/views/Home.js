export default () => `
<h4>Weather in ${st.weather.city}: ${
  st.weather.description
} // ${kelvinToFahrenheit(st.weather.temp)}F, feels like ${kelvinToFahrenheit(
  st.weather.feelsLike
)}F</h4>
<section id="csstransfer">
  <h2>ProCode Bio</h2>
  <h2>More To Come</h2>
</section>`;
