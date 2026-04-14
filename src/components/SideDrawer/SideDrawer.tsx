
import { IoClose } from 'react-icons/io5';
import './SideDrawer.css'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

type SideDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            {isOpen && <div className="overlay" onClick={onClose}></div>}

            {/* Drawer */}
            <div className={`drawer ${isOpen ? "open" : ""}`}>
                {/* Header */}
                <div className="drawer-header">
                    <h2>Log in to your account</h2>
                    <button onClick={onClose}>
                        <IoClose size={22} />
                    </button>
                </div>

                <p className="subtitle">
                    Welcome back! We’ll remember your details so you can get straight to what matters.
                </p>

                {/* Form */}
                <div className="form-group">
                    <label>Email (username)</label>
                    <input type="text" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" />
                </div>

                <a href="#" className="forgot">Forgot your password?</a>

                <button className="login-btn">Login</button>

                <p className="social-text">Or use social login below</p>

                <button className="social-btn">
                    <FcGoogle /> Login with Google
                </button>

                <button className="social-btn">
                    <FaFacebookF /> Login with Facebook
                </button>

                <div className="divider">
                    <span>New at NIA?</span>
                </div>

                <button className="create-btn">Create account</button>
            </div>
        </>
    );
};

export default SideDrawer;