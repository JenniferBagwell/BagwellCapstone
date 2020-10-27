import { capitalize } from "lodash";
export default st => `
<section id="blog">
<form
  action="https://formspree.io/f/xeqpqlvq"
  method="POST"
>
  <label>
  Contact me for more info
  </label>
  <label>
    Your email:
    <input type="text" name="_replyto">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>

  <!-- your other form fields go here -->

  <button type="submit">Send</button>
</form> `;
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
