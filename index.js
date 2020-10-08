import Navigo from "navigo";
import { capitalize } from "lodash";
const router = new Navigo(window.location.origin);
// importing all as a Module object
import * as state from "./store";
// importing all by name
import { Header, Nav, Main, Footer } from "./components";
// add menu toggle to bars icon in nav bar
// import root for blog
import axios from "axios";

// get data from an API endpoint
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  // handle the response from the API
  .then(response => {
    // for each post in the response Array,
    response.data.forEach(post => {
      // add it to state.Blog.posts
      state.Blog.posts.push(post);
    });
  });

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();

  addPicOnFormSubmit(st);
  addNavEventListeners();
}

render(state.Home);

router

  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
function addPicOnFormSubmit(st) {
  if (st.view === "Form") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});

      // add new picture to state.Gallery.pictures
      state.Gallery.pictures.push(newPic);
      render(state.Gallery);
    });
  }
}

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

// handle form submission
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});

// blog html
function formatBlogPost(post) {
  return `
  <div class="blog-post">
    <h4>${post.title} by User ${post.userId}</h4>
    <p>${post.body}</p>
  </div>`;
}
export default st => `
<section id="blog">
${st.posts
  .map(post => {
    formatBlogPost(post);
  })
  .join()}
</section>`;

// blog axios code our navigo router
axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
  response.data.forEach(post => {
    state.Blog.posts.push(post);
  });
  // use our router Object to find the "current page"/last resolved route
  const params = router.lastRouteResolved().params;
  // this params key "page" is the same as our "variable" we specified in our router's on() method
  render(state[params.page]);
});
