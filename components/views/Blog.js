import { capitalize } from "lodash";
export default st => `
<section id="blog">
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
