import { useState } from "react";
import { useAuth } from "../../../context/useAuth";
import { loginUser, signupUser } from "../services/authApi";

type FormState = {
    regpassword: string;
    regemail: string;
    regusername: string;
    username: string;
    password: string;
};
export const useAuthForm = (onSuccess?: () => void) => {
    const { login } = useAuth();

    const [form, setForm] = useState<FormState>({
        username: "",
        password: "",
        regemail: "",
        regusername: "",
        regpassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleLogin = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await loginUser(form);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("username", form.username);

            login(form.username);

            onSuccess?.(); // close drawer
        } catch {
            setError("Invalid username or password");
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async () => {
        setLoading(true);
        setError("");

        try {
            const payload = {
                email: form.regemail,
                username: form.regusername,
                password: form.regpassword,
            };

            const res = await signupUser(payload);

            console.log("User created:", res.data);

            // 🔥 Optional: auto login after signup
            // await handleLogin();

            onSuccess?.(); // close drawer or switch to login

        } catch (err) {
            setError("Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return {
        form,
        loading,
        error,
        handleChange,
        handleLogin,
        handleSignup,
    };
};