export default function Experience() {
    const experiences = [
        {
            company: "EDSA",
            logo: "images/edsa-logo.jfif",
            role: "Frontend Developer",
            from: "Ago 2021",
            to: "Oct 2025",
            location: "Tandil, BA (remote)"
        },
        {
            company: "ACME",
            logo: "",
            role: "Designer",
            from: "Nov 2025",
            to: "Present",
            location: "Buenos Aires"
        },
    ];

    const rows = experiences.map((e, index) => (
        <div key={index} className="flex flex-row gap-1 justify-between">
            <div className="flex flex-row gap-3 items-center">
                <div className="flex items-center border-1 border-gray-300 rounded-lg size-12 overflow-hidden">
                    {e.logo && (
                        <img src={e.logo} alt={e.company} className="" />
                    )}
                </div>
                <div className="grid gap-1">
                    <span className="bold">{e.company}</span>
                    <span className="text-gray-500 text-sm">{e.role}</span>
                </div>
            </div>
            <div className="grid gap-1">
                <span className="text-end bold text-nowrap">{e.from} - {e.to}</span>
                <span className="text-end text-gray-500 text-sm">{e.location}</span>
            </div>
        </div>
    ))
    return (
        <div className="mt-16">
            <div className="text-gray-1200 mb-5 flex w-full items-center font-medium">Experience</div>
            <div className="grid gap-12">
                {rows}
            </div>
        </div>
    )
}