import { capitalize } from "lodash";
export default st => `
<section id="blog">
<h4>Weather in ${st.weather.city}: ${
  st.weather.description
} // ${kelvinToFahrenheit(st.weather.temp)}F, feels like ${kelvinToFahrenheit(
  st.weather.feelsLike
)}F</h4>

${st.posts
  .map(post => {
    return formatBlogPost(post);
  })
  .join()}
</section>`;

function formatBlogPost(post) {
  return `
  <div class="blog-post">
    <h4>${capitalize(post.title)} by User ${post.userid}</h4>
    <p>${capitalize(post.post)}</p>
  </div>`;
}
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
