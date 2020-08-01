import React, {useState} from 'react';
import './Login.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log('beginning');
        fetch('http://localhost:1337/auth/local', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                identifier: email,
                password: password
            })
        })
            .then((res) => res.json())
            .then(res => localStorage.setItem('token', res.jwt)).finally(console.log(localStorage.getItem('token')));

    };

    return (
        <div data-testid='Login'>
            <div id='login'>
                <div className='container'>
                    <div id='login-row' className='row justify-content-center align-items-center'>
                        <div id='login-column' className='col-md-6'>
                            <div id='login-box' className='col-md-12'>
                                {/*<form id='login-form' className='form'>*/}
                                <h3 className='text-center text-info'>Login</h3>
                                <div className='form-group'>
                                    <label htmlFor='email' className='text-info'>Email:</label>
                                    <br/>
                                    <input type='email' name='email' id='email' className='form-control'
                                           value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='password' className='text-info'>Password:</label>
                                    <br/>
                                    <input type='password' name='password' id='password' className='form-control'
                                           value={password}
                                           onChange={e => setPassword(e.target.value)}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='remember-me' className='text-info'><span>Remember me</span>
                                        <span>
                                            <input id='remember-me' name='remember-me' type='checkbox'/>
                                        </span>
                                    </label>
                                    <br/>
                                    <button onClick={handleSubmit} type='submit' name='submit'
                                            className='btn btn-info btn-md'>
                                        Submit
                                    </button>
                                </div>
                                <div id='register-link' className='text-right'>
                                    <a href='#' className='text-info'>Register here</a>
                                </div>
                                {/*</form>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
