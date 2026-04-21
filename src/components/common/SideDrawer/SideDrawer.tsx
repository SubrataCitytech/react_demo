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

type SideDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {

    const { } = useAuthForm(onClose);

    return (
        <>
            {isOpen && <div className="overlay" onClick={onClose}></div>}

            <div className={`drawer ${isOpen ? "open" : ""}`}>
                <div className="drawer-header">
                    <h2>
                        Login in to your account
                        <small>
                            Welcome back! We’ll remember your details so you can get straight to what matters.
                        </small>
                    </h2>
                    <button onClick={onClose}>
                        <IoClose size={18} />
                    </button>
                </div>
                <Login />
                <Signup />
            </div>
        </>
    );
};

export default SideDrawer;
