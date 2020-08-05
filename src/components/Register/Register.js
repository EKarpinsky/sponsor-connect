import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {AuthContext} from '../../libs/contextLib';


const Register = () => {
    const authContext = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [userRole, setUserRole] = useState('creator');
    const history = useHistory();

    const handleSubmit = () => {
        fetch('http://localhost:1337/auth/local/register', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                role: {
                    id: 3
                }
            })
        })
            .then((res) => res.json())
            .then(res => {
                if (res.statusCode) {
                    // stupid Strapi API format
                    if (res.message)
                        setError(res.message[0].messages[0].message)
                } else {
                    authContext.login();
                    localStorage.setItem('token', res.jwt);
                    localStorage.setItem('user', JSON.stringify(res.user));
                    history.push('/dashboard');
                }
            });
    };

    return (
        <div data-testid='Register' id='login-container'>
            <div id='login'>
                <div className='container'>
                    <div id='login-row' className='row justify-content-center align-items-center'>
                        <div id='login-column' className='col-md-6'>
                            <div id='login-box' className='col-md-12 flex'>
                                {/*<form id='login-form' className='form'>*/}
                                <h3 className='text-center text-info'>Register</h3>
                                <div className='form-group'>
                                    <label htmlFor='email' className='text-info'>Username:</label>
                                    <br/>
                                    <input type='text' name='username' id='username' className='form-control'
                                           value={username}
                                           onChange={e => setUsername(e.target.value)}/>
                                </div>
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
                                <h3 className='text-center text-info'>I am a:</h3>
                                <div className='btn-group-toggle d-flex justify-content-center' data-toggle='buttons'>
                                    <label
                                        className={
                                            userRole === 'creator'
                                                ? 'btn btn-secondary radio-inline mx-2 px-5 active'
                                                : 'btn btn-secondary radio-inline mx-2 px-5'}>
                                        <input type='radio' name='optradio' onChange={() => setUserRole('creator')}/>Creator</label>
                                    <label
                                        className={
                                            userRole === 'sponsor'
                                                ? 'btn btn-secondary radio-inline mx-2 px-5 active'
                                                : 'btn btn-secondary radio-inline mx-2 px-5'}>
                                        <input type='radio' name='optradio' onChange={() => setUserRole('sponsor')}/>Sponsor</label>
                                </div>
                                <div className='form-group'>

                                    <br/>
                                    {error !== '' && <div className={'alert alert-danger'}>{error}</div>}
                                    <button onClick={handleSubmit} type='submit' name='submit'
                                            className='btn btn-info btn-md mt-3'>
                                        Submit
                                    </button>
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

export default Register;
