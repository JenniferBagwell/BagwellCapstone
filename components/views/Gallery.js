export default st => `
${st.pictures.reduce(
  (html, pic) =>
    html + `<img src="${img / procodebackground.png}" alt="${pic.title}">`,
  ``
)}`;
