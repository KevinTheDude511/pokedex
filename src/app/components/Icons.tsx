interface IconProps {
    fillColor?: string;
    strokeColor?: string;
    className?: string;
}

export const LeftArrow: React.FC<IconProps> = ({
    fillColor = "currentColor",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
        </svg>
    );
};

export const LeftChevron: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
            />
        </svg>
    );
};

export const RightChevron: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
        </svg>
    );
};

export const XMark: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
            />
        </svg>
    );
};

export const Search: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
        </svg>
    );
};

export const Sort: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 48 48"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                d="M16.5 36h-9c-.433 0-.792-.142-1.075-.425C6.142 35.292 6 34.933 6 34.5c0-.433.142-.792.425-1.075.283-.283.642-.425 1.075-.425h9c.433 0 .792.142 1.075.425.283.283.425.642.425 1.075 0 .433-.142.792-.425 1.075-.283.283-.642.425-1.075.425zm24-21h-33c-.433 0-.792-.142-1.075-.425C6.142 14.292 6 13.933 6 13.5c0-.433.142-.792.425-1.075.283-.283.642-.425 1.075-.425h33c.433 0 .792.142 1.075.425.283.283.425.642.425 1.075 0 .433-.142.792-.425 1.075-.283.283-.642.425-1.075.425zm-12 10.5h-21c-.433 0-.792-.142-1.075-.425C6.142 24.792 6 24.433 6 24c0-.433.142-.792.425-1.075.283-.283.642-.425 1.075-.425h21c.433 0 .792.142 1.075.425.283.283.425.642.425 1.075 0 .433-.142.792-.425 1.075-.283.283-.642.425-1.075.425z"
            ></path>
        </svg>
    );
};

export const Ruler: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 48 48"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                fill="#1D1D1D"
                d="M7 36c-.8 0-1.5-.3-2.1-.9-.6-.6-.9-1.3-.9-2.1V15c0-.767.3-1.458.9-2.075C5.5 12.308 6.2 12 7 12h34c.8 0 1.5.308 2.1.925.6.617.9 1.308.9 2.075v18c0 .8-.3 1.5-.9 2.1-.6.6-1.3.9-2.1.9H7zm0-3h34V15h-6.5v9h-3v-9h-6v9h-3v-9h-6v9h-3v-9H7v18zm6.5-9h3-3zm9 0h3-3zm9 0h3-3z"
            ></path>
        </svg>
    );
};

export const HashTag: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
            />
        </svg>
    );
};

export const TextFormat: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 48 48"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                fill="#1D1D1D"
                d="M11.5 38c-.433 0-.792-.142-1.075-.425-.283-.283-.425-.642-.425-1.075 0-.433.142-.792.425-1.075.283-.283.642-.425 1.075-.425h25c.433 0 .792.142 1.075.425.283.283.425.642.425 1.075 0 .433-.142.792-.425 1.075-.283.283-.642.425-1.075.425h-25zm8.15-16.2h8.7L24.1 10.7h-.2l-4.25 11.1zm-3.8 8.2c-.533 0-.883-.175-1.05-.525-.167-.35-.167-.775 0-1.275l7-18.65c.167-.433.458-.8.875-1.1.417-.3.858-.45 1.325-.45.467 0 .908.15 1.325.45.417.3.708.667.875 1.1l7 18.65c.167.5.167.925 0 1.275-.167.35-.517.525-1.05.525-.267 0-.508-.075-.725-.225-.217-.15-.358-.325-.425-.525l-1.95-5.2H18.9l-1.95 5.2c-.067.2-.208.375-.425.525a1.17 1.17 0 01-.675.225z"
            ></path>
        </svg>
    );
};

export const Weight: React.FC<IconProps> = ({
    fillColor = "none",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 48 48"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                fill="#1D1D1D"
                d="M10.85 39h26.3L34 17H14l-3.15 22zM24 14c.867 0 1.583-.292 2.15-.875S27 11.833 27 11c0-.867-.283-1.583-.85-2.15S24.867 8 24 8c-.833 0-1.542.283-2.125.85S21 10.133 21 11c0 .833.292 1.542.875 2.125A2.893 2.893 0 0024 14zm5.2 0H34c.767 0 1.433.242 2 .725s.9 1.108 1 1.875l3.1 22c.133.9-.092 1.692-.675 2.375-.583.683-1.342 1.025-2.275 1.025h-26.3c-.933 0-1.692-.342-2.275-1.025-.583-.683-.808-1.475-.675-2.375l3.1-22c.1-.767.433-1.392 1-1.875A2.985 2.985 0 0114 14h4.8a6.181 6.181 0 01-.6-1.425A5.907 5.907 0 0118 11c0-1.667.583-3.083 1.75-4.25C20.917 5.583 22.333 5 24 5c1.667 0 3.083.583 4.25 1.75C29.417 7.917 30 9.333 30 11c0 .567-.067 1.092-.2 1.575A6.181 6.181 0 0129.2 14zM10.85 39h26.3-26.3z"
            ></path>
        </svg>
    );
};

export const PokeBall: React.FC<IconProps> = ({
    fillColor = "currentColor",
    strokeColor = "currentColor",
    className = "",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor}
            viewBox="0 0 48 48"
            strokeWidth={1.5}
            stroke={strokeColor}
            className={className}
        >
            <path
                fill={fillColor}
                d="M29.714 24a5.714 5.714 0 11-11.428 0 5.714 5.714 0 0111.428 0z"
            ></path>
            <path
                fill={fillColor}
                fillRule="evenodd"
                d="M24 48c12.09 0 22.093-8.94 23.757-20.571H33.701c-1.413 3.995-5.222 6.857-9.7 6.857-4.48 0-8.29-2.863-9.701-6.857H.243C1.907 39.059 11.91 48 24 48zm-9.7-27.429H.243C1.907 8.941 11.91 0 24 0c12.09 0 22.093 8.94 23.757 20.571H33.701c-1.413-3.995-5.222-6.857-9.7-6.857-4.48 0-8.29 2.862-9.701 6.857zM29.714 24a5.714 5.714 0 11-11.428 0 5.714 5.714 0 0111.428 0z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
};
