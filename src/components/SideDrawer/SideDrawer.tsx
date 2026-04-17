import { IoClose } from 'react-icons/io5';
import './SideDrawer.css';
import { FcGoogle } from 'react-icons/fc';
// import { FaFacebookSquare } from 'react-icons/fa';
import { loginUser } from '../../api/authApi';
import { useState } from 'react';
import { useAuth } from '../../context/useAuth';

type SideDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose }) => {
    const { login, logout } = useAuth();
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ handle input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        });
    };

    // ✅ handle login (ONLY here API runs)
    const handleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await loginUser(form);

            console.log("Token:", res.data.token);

            // save token
            localStorage.setItem("token", res.data.token);

            // save username
            localStorage.setItem("username", form.username);
            login(form.username);

            // alert("Login successful 🚀");
            console.log("Username from context:", form.username);


            onClose(); // optional: close drawer after login
        } catch (err) {
            setError("Invalid username or password");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        onClose(); // close drawer
    };

    return (
        <>
            {isOpen && <div className="overlay" onClick={onClose}></div>}

            <div className={`drawer ${isOpen ? "open" : ""}`}>
                <div className="drawer-header">
                    <h2>
                        Log in to your account
                        <small>
                            Welcome back! We’ll remember your details so you can get straight to what matters.
                        </small>
                    </h2>
                    <button onClick={onClose}>
                        <IoClose size={18} />
                    </button>
                </div>

                <div className="form-group">
                    <label htmlFor="username">Email (username)</label>
                    <input
                        type="text"
                        id="username"
                        value={form.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
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

                <p className="social-text text-center">Or use social login below</p>

                <button className="social-login-btn">
                    <FcGoogle className="icon" /> Login with Google
                </button>

                {/* <button className="social-login-btn">
                    <FaFacebookSquare className="icon" style={{ color: '#2669F6' }} />
                    Login with Facebook
                </button> */}

                <div className="divider">
                    <span>New at eCommerce?</span>
                </div>

                <button className="create-btn" onClick={handleLogout}>Create account</button>
            </div>
        </>
    );
};

export default SideDrawer;
