interface Props {
    icon?: string,
    text: string,
    onClick: () => void,
    isActive: boolean,
}
const Button: React.FC<Props> = ({ text, onClick, isActive, icon }) => {
    return (
        <button className={`
            flex h-9 items-center justify-center gap-1.5 rounded-full px-4 font-medium  transition-colors duration-0 ease-out hover:bg-gray-400 hover:duration-1000 cursor-pointer active:scale-[0.97]
            ${isActive ? "bg-gray-1200 text-gray-100" : "bg-gray-300 text-gray-1200"}
        `}
            onClick={onClick}>
            {icon && <i className={`fa fa-${icon}`} />}
            {text}
        </button>
    )
}

export default Button;