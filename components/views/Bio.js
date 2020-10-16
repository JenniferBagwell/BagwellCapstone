export default () => `
<section id="csstransfer">
<section id="bio">
    <h2>My Bio</h2>
    <h1>Professional Link Biohub</h1>
    <body>
<h2 class="purple">Professional Bio Linkhub</h2>
<br>
<p>This is my professional savvycoders bio. From you can you access my savvycoder profiles through the links provided. There is also a list of all my currant professional Certifications. This professional coder bio will be updated routinely as I continue to build my coding career.</p>
<h3>My professional coding links</h3>
<ol><h4>
  <li><a href="https://github.com/JenniferBagwell"> My GitHub </a></li>
  <li><a href="https://trello.com/b/yCWNgWGD/bagwell-capstone-kanban"> My Trello Board </a></li>
  </h4>
</ol>
<h3 id="inbox">My Professional Certifications</h3>
<ol><h4>
  <li><h3>Agile Certifications</h3></li>
  <img src="imgs/agilecert.png" alt="Agile Certification" width="30%" height="auto">
  <h3><li>Advanced Social Media Certification</h3></li>
  <img src="imgs/social media cert.png" alt="Agile Certification" width="30%" height="auto">

</h4></ol>
  </body>
</p>
  </section>`;
  <!DOCTYPE html>
<html>
<head>
<style>
div {
  width: 100px;
  height: 50px;
  background-color: beige;
  font-color: white;
  position: relative;
  animation: mymove 5s infinite;
}

#div1 {animation-timing-function: linear;}
#div2 {animation-timing-function: ease;}
#div3 {animation-timing-function: ease-in;}
#div4 {animation-timing-function: ease-out;}
#div5 {animation-timing-function: ease-in-out;}

@keyframes mymove {
  from {left: 0px;}
  to {left: 300px;}
}
</style>
</head>
<body>

<p><strong>Note:</strong> The animation-timing-funtion property is not supported in Internet Explorer 9 and earlier versions.</p>

<div id="div1">Jennifer</div>
<div id="div2">Bagwell</div>
<div id="div3">Pro</div>
<div id="div4">Code</div>
<div id="div5">Bio</div>

</body>
</html>

