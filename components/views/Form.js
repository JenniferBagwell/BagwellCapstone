export default () => `
<form id="register" method="POST" action="">
  <div>
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" placeholder="Url">
  </div>
  <div>
    <label for="password">Password:</label>
    <input type="text" name="password" id="password">
  </div>
  <input type="submit" name="register" value="Click here">
</form>`;
<form
  action="https://formspree.io/f/xeqpqlvq"
  method="POST"
>
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
</form>
