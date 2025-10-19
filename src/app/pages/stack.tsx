export default function Stack() {
    const stacks = [
        {
            name: "Angular",
            icon: "images/angular.png",
        },
        {
            name: "React",
            icon: "images/react.png",
        },
        {
            name: "Figma",
            icon: "images/figma.png",
        },
        {
            name: "NodeJs",
            icon: "images/nodejs.png",
        }
    ]

    const rows = stacks.map((s, index) => (
        <div key={index} className="flex flex-col gap-3 items-center border-1 border-gray-300 rounded-lg size-12 p-2 hover:scale-120 transition:scale duration-300">
            <img src={s.icon} alt={s.name} />
            <span className="text-gray-1100">{s.name}</span>
        </div>
    ))
    return (
        <div className="mt-16">
            <div className="text-gray-1200 mb-5 flex w-full items-center font-medium">Stack</div>
            <div className="flex flex-row justify-around">
                {rows}
            </div>
        </div>
    )
}