export default st => `
<section id="blog">
${st.posts.map(post => {}).join()}
</section>`;
