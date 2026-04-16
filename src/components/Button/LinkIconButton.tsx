import React from 'react'

type LinkIconButtonProps = {
    href?: string;
    Icon?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
};

const LinkIconButton: React.FC<LinkIconButtonProps> = ({
    href = "#",
    Icon,
    children,
    className = "",
    ...props
}) => {
    return (
        <a
            href={href}
            // target="_blank"
            rel="noopener noreferrer"
            className={`d-flex align-items-center gap-2 topBar_link_btn ${className}`
            }
            {...props}
        >
            {Icon && <Icon className="topBar_icon" />}
            {children && <span>{children}</span>}
        </a >
    );
};
export default LinkIconButton
