import React from "react";
import "./Input.css";

type InputProps = {
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    type,
    id,
    value,
    onChange,
    ...props
}) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};

export default Input;