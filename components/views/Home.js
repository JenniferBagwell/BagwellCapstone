export default () => `
<section id="csstransfer">
  <h2>Home Page</h2>
  <a href="">"To be added"</a>
  <html>
<head>
<style>
div {
  width: 100px;
  height: 50px;
  background-color: black;
  font-weight: bold;
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
</section>`;
