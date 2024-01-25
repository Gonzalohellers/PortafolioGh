
const LoginForm = () => {
    return (
      <div className={"container"}>
        <form className={"form"}>
          <h2 className={"title"}>Login</h2>
          <input
        type="text"
        placeholder="Username"
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
      />
      <button className="button">Login</button>
        </form>
      </div>
    );
  }
  
  export default LoginForm;