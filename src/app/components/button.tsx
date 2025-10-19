interface Props {
    icon?: string,
    text: string,
    link?: string,
}
const Button: React.FC<Props> = ({ text }) => {
    return (
        <button className="flex flex-row gap-3 bg-gray-300 dark:bg-slate-600 rounded-full text-white w-fit px-4">
            {text}
        </button>
    )
}

export default Button;