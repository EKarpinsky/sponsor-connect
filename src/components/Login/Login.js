import React, {useState, useContext} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from '../../libs/contextLib';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const authContext = useContext(AuthContext);

    const handleSubmit = () => {
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
            .then(res => {
                authContext.login();
                localStorage.setItem('token', res.jwt);
                history.push('/dashboard');
            });
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
                                    <Link to='/login' className='text-info'>Register here</Link>
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
