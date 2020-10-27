export default st => `
<section id="csstransfer">
${st.pictures.reduce(
  (html, pic) => html + `<img src="${pic.url}" alt="${pic.title}">`,
  ``
)}`;
