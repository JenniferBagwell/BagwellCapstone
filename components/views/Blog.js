export default st => `
<h3>Weather in ${st.weather.city}: ${
  st.weather.description
} // ${kelvinToFahrenheit(st.weather.temp)}F, feels like ${kelvinToFahrenheit(
  st.weather.feelsLike
)}F</h3>
<section id="csstransfer">
  <h2>Procode Bio Blog</h2>
  <a href="https://procode.bio/Form">"Sign up for alerts" "Button"</a>
  <br>
  <p><h2>MY working server on my computer</h2></p>

<table>
  <tr>
    <td>  <img src="https://github.com/JenniferBagwell/BagwellCapstone/blob/master/imgs/localhost%20new%20user%20server.png?raw=true"></a></td>
    <td>  <img src="https://github.com/JenniferBagwell/BagwellCapstone/blob/master/imgs/localhost%20userlist.png?raw=true"></a></td>
  </tr>
</table>
  <img src="https://github.com/JenniferBagwell/BagwellCapstone/blob/master/imgs/localhost%20new%20user%20server.png?raw=true"></a>
  <img src="https://github.com/JenniferBagwell/BagwellCapstone/blob/master/imgs/localhost%20userlist.png?raw=true"></a>
</section>`;

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
