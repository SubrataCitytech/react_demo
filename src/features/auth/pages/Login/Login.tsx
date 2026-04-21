import React from 'react'
import './Login.css'
import { useAuthForm } from '../../hooks/useAuth';
import Input from '../../../../components/common/Input/Input';

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({ }) => {

    const { form, loading, error, handleChange, handleLogin } = useAuthForm();



    return (
        <>


            <div className="form-group">
                <label htmlFor="username">Email (username)</label>
                <Input
                    type={'text'}
                    id={'username'}
                    value={form.username}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                    type={'password'}
                    id={'password'}
                    value={form.password}
                    onChange={handleChange}
                />
            </div>

            <a href="#" className="forgot">Forgot your password?</a>

            <button
                className="fill-btn login-btn"
                onClick={handleLogin}
                disabled={loading}
            >
                {loading ? "Logging..." : "Login"}
            </button>

            {error && (
                <p style={{ color: "red", fontSize: 14, textAlign: "center" }}>
                    {error}
                </p>
            )}

            {/* <p className="social-text text-center">Or use social login below</p> */}

            {/* <button className="social-login-btn">
                    <FcGoogle className="icon" /> Login with Google
                </button> */}

            {/* <button className="social-login-btn">
                    <FaFacebookSquare className="icon" style={{ color: '#2669F6' }} />
                    Login with Facebook
                </button> */}

            <div className="divider">
                <span>
                    New user? at eCommerce?</span>
            </div>

            <button className="create-btn">Create account</button>
        </>
    )
}

export default Login
