import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useAuthCtx } from '../store/authContext';
import { baseUrl, myFetch } from '../utils';

const initValues = {
  email: '',
  password: '',
};

function RegisterPage() {
  const history = useHistory();
  const ctx = useAuthCtx();
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Patikrinkite savo email').required(),
      password: Yup.string().min(4, 'Maziausiai 4 simboliai').max(10).required(),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords nust match')
        .required(),
    }),
    onSubmit: async (values) => {
      console.log('values ===', values);
      const fetchResult = await myFetch(`${baseUrl}/register`, 'POST', values);
      // ar gavom token
      if (fetchResult.success) {
        // turim token
        ctx.register(fetchResult.token, values.email);
        // redirect to /login
        history.replace('/login');
      }
      console.log('fetchResult ===', fetchResult);
    },
  });

  function matchPass() {
    const { password, repeatPassword } = initValues;
    if (password !== repeatPassword) {
      console.log('Password does not match');
    }
  }

  // console.log('formik.errors ===', formik.errors);
  function rightClassesForInput(field) {
    let resultClasses = 'form-control';

    // if (formik.touched[field] && formik.errors[field]) {
    //   resultClasses += ' is-invalid';
    // }
    // if (formik.touched[field] && !formik.errors[field]) {
    //   resultClasses += ' is-valid';
    // }
    if (formik.touched[field]) {
      resultClasses += formik.errors[field] ? ' is-invalid' : ' is-valid';
    }

    return resultClasses;
  }

  return (
    <div className='container'>
      <h1 className='display-4 py-4 text-center'>Register Here</h1>

      <form onSubmit={formik.handleSubmit} onBlur={matchPass} className='jumbotron w-50 mx-auto'>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type='email'
            className={rightClassesForInput('email')}
            id='email'
            name='email'
          />
          <div className='invalid-feedback'>{formik.errors.email}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type='password'
            className={rightClassesForInput('password')}
            id='password'
            name='password'
          />
          <div className='invalid-feedback'>{formik.errors.password}</div>
        </div>
        <div className='form-group'>
          <label htmlFor='repeatPassword'>Repeat Password</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.repeatPassword}
            type='password'
            className={rightClassesForInput('repeatPassword')}
            id='repeatPassword'
            name='repeatPassword'
          />
          <div className='invalid-feedback'>{formik.errors.repeatPassword}</div>
        </div>
        <button type='submit' className='btn btn-outline-dark'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
