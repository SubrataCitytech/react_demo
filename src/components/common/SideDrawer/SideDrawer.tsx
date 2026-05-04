import { IoClose } from 'react-icons/io5';
import './SideDrawer.css';
// import { FcGoogle } from 'react-icons/fc';
// import { FaFacebookSquare } from 'react-icons/fa';
// import { loginUser } from '../../api/authApi';
// import { useState } from 'react';
// import { useAuth } from '../../context/useAuth';
import { useAuthForm } from '../../../features/auth/hooks/useAuth';
// import Input from '../Input/Input';
import Login from '../../../features/auth/pages/Login/Login';
import Signup from '../../../features/auth/pages/Signup/Signup';
import { useState } from 'react';

type SideDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {

    const [showSignup, setShowSignup] = useState(false);


    const { } = useAuthForm(onClose);

    return (
        <>
            {isOpen && <div className="overlay" onClick={onClose}></div>}
            <div className={`drawer ${isOpen ? "open" : ""}`}>

                <div className="drawer-header">
                    {showSignup ? (
                        <h2>
                            Create your account
                            <small>
                                Join us today! Enter your details to get started and enjoy a seamless experience.
                            </small>
                        </h2>
                    ) : (
                        <h2>
                            Login in to your account
                            <small>
                                Welcome back! We’ll remember your details so you can get straight to what matters.
                            </small>
                        </h2>
                    )}
                    < button onClick={onClose}>
                        <IoClose size={18} />
                    </button>
                </div>
                {showSignup ? (
                    <Signup onBackToLogin={() => setShowSignup(false)} />
                ) : (
                    <Login onCreateAccount={() => setShowSignup(true)} />
                )}
            </div >
        </>
    );
};

export default SideDrawer;
