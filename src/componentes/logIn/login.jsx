
const LoginForm = () => {
    return (
      <div className={"container"}>
        <form className={"form"} method="post" action="http://localhost:6060/users/validar">
          <h2 className={"title"}>Login</h2>
          <input
        type="text"
        placeholder="Username"
        className="input"
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        name="password"
      />
      <button className="button">Login</button>
        </form>
      </div>
    );
  }
  
  export default LoginForm;