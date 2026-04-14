import React from 'react'


type NavActionButtonProps = {
    href?: string;
    Icon?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};
const NavActionButton: React.FC<NavActionButtonProps> = ({
    href = "#",
    Icon,
    children,
    className,
    ...props
}) => {
    return (
        <button
            className={`nav-action-btn ${className || ''}`}
            {...props}
        >
            {Icon && <Icon style={{ fontSize: "20px" }} />
            }
            {children && <span style={{ fontSize: "14px" }} >{children}</span>}
        </button >
    )
}

export default NavActionButton;
