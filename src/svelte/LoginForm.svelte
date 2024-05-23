<script>
  let email = "";
  let password = "";

  function handleSubmit() {
    console.log("Email:", email, "Password:", password);
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />
  <br />
  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} />
  <br />
  <button type="submit">Login</button>
</form>
