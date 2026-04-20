import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { loginUser } from "../api/authApi";

export const useAuthForm = (onSuccess?: () => void) => {
    const { login } = useAuth();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
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

    return {
        form,
        loading,
        error,
        handleChange,
        handleLogin,
    };
};