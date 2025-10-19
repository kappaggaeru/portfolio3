interface Props {
    icon?: string,
    text: string,
    link?: string,
    ariaLabel?: string,
    href?: string;
}
const Anchor: React.FC<Props> = ({ icon, text, link, ariaLabel }) => {
    return (
        <a
            aria-label={ariaLabel}
            target="_blank"
            href={link}
            rel="noreferrer"
            className="transition-[colors, scale] flex h-9 cursor-pointer items-center gap-1.5 rounded-full bg-gray-300 px-4 font-medium duration-200 ease-out select-none hover:bg-gray-400 active:scale-[0.97]"
        >
            <i className={`fa fa-${icon}`}></i>
            {text}
        </a>
    )
}

export default Anchor;