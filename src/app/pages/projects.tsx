export default function Projects() {
    const projects = [
        {
            title: "Example",
            desc: "Lorem ipsun",
            year: "Oct 2025",
            cover: ""
        },
        {
            title: "Example",
            desc: "Lorem ipsun",
            year: "Oct 2025",
            cover: ""
        },
    ]

    const rows = projects.map((p, index) => (
        <div key={index} className="border-1 border-gray-300 shacustom-shadow rounded-xl p-1">
            <div className="border-1 border-gray-300 rounded-lg bg-gray-100 h-24"></div>
            <div className="grid p-2">
                <span className="text-gray-1200">{p.title}</span>
                <span className="text-gray-1100">{p.desc}</span>
            </div>
        </div>
    ));
    return (
        <div className="mt-16">
            <div className="text-gray-1200 mb-5 flex w-full items-center font-medium">Projects</div>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {rows}
            </div>
        </div>
    )
}

{/* 
                <a className="shadow-bg bg-preview-bg shadow-custom flex h-64 flex-col items-center justify-center rounded-xl p-1 transition-colors duration-200 ease-out hover:bg-gray-100 dark:border dark:border-gray-300 dark:shadow-none dark:hover:bg-gray-200">
                    <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-lg border border-gray-400 bg-gray-100 dark:border-gray-300">
                        <div className="absolute top-1/2 left-1/2 flex h-full translate-x-[-50%] translate-y-[-50%] gap-32">
                            <span className="border-preview-border h-full border-l border-dashed"></span>
                            <span className="border-preview-border h-full border-l border-dashed"></span>
                        </div>
                        <div className="absolute top-1/2 left-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col gap-24">
                            <span className="border-preview-border w-full border-t border-dashed"></span>
                            <span className="border-preview-border w-full border-b border-dashed"></span>
                        </div>
                        <div className="shadow-bg bg-preview-bg shadow-custom flex size-14 shrink-0 items-center justify-center rounded-xl dark:border dark:border-gray-300 dark:bg-gray-200 dark:shadow-none">
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-0.5 p-2 font-medium">
                            <span className="leading-6">Less</span>
                            <span className="text-gray-1100 leading-6 font-normal">Budgeting turned upside down.</span>
                        </div>
                    </div>
                </a>
            </div> */}