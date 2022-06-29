function LoginPage() {
  return (
    <div className='container'>
      <h1 className='display-4 py-4 text-center'>LoginPage</h1>

      <form className='jumbotron w-50 mx-auto'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input type='password' className='form-control' id='exampleInputPassword1' />
        </div>
        <button type='submit' className='btn btn-outline-dark'>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
