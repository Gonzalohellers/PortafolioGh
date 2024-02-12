
const LoginForm = () => {
    return (
      <div className={"container"}>
        <form className={"form"} method={"post"} action={"http://localhost:6060/users"}>
          <h2 className={"title"}>Register</h2>
          <input
        type="text"
        placeholder="usuario"
        className="input"
        name="usuario"
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        name="password"
      />
      <button type="submit" className="button">Register</button>
        </form>
      </div>
    );
  }
  
  export default LoginForm;