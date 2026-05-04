// import React from 'react'.
import './Signup.css'
import { FcGoogle } from 'react-icons/fc';
import Input from '../../../../components/common/Input/Input'
import { useAuthForm } from '../../hooks/useAuth';
import { signupUser } from '../../services/authApi';


interface SignUpProps {
    onBackToLogin: () => void;
}

const Signup: React.FC<SignUpProps> = ({ onBackToLogin }) => {

    const { form, handleSignup } = useAuthForm();
    return (
        <>
            <div className="form-group">
                <label htmlFor="regusername">Username</label>
                <Input
                    type={'text'}
                    id={'regusername'}
                    value={form.regusername}
                    onChange={handleSignup}
                />
            </div>
            <div className="form-group">
                <label htmlFor="regemail">Email</label>
                <Input
                    type={'text'}
                    id={'regemail'}
                    value={form.regemail}
                    onChange={handleSignup}
                />
            </div>

            <button className="fill-btn login-btn"> Register </button >

            <p className="social-text text-center">Or use social login below</p>

            <button className="social-login-btn">
                <FcGoogle className="icon" /> Login with Google
            </button>

            <p className='text_link'>Already have an account ? <button onClick={onBackToLogin}>Log In</button></p >
        </>
    )
}


export default Signup
