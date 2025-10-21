import Image from "next/image";

export default function Experience() {
    const experiences = [
        {
            company: "EDSA",
            logo: "/images/edsa-logo-negro.png",
            role: "Frontend Developer",
            from: "Jul 2021",
            to: "Present",
            location: "Tandil, Buenos Aires",
            url: "https://www.edsa.com/"
        }
    ];

    const rows = experiences.map((e, index) => (
        <a
            key={index}
            className="flex flex-row justify-between gap-3"
            rel="noreferrer"
            target="_blank"
            href={e.url}
            aria-label="EDSA"
        >
            <div className="flex flex-row gap-3 items-center">
                <div className="hidden sm:flex items-center border-1 border-gray-300 size-12 min-w-12 rounded-lg p-2">
                    {e.logo && (
                        <Image
                            src={e.logo}
                            alt={e.company}
                            className="w-full rounded-lg"
                            width={20}
                            height={20}
                        />
                    )
                    }
                </div>
                <div className="grid gap-1">
                    <span className="bold">{e.company}</span>
                    <span className="text-gray-1100 text-sm">{e.role}</span>
                </div>
            </div>
            <div className="grid gap-1">
                <span className="text-end bold text-nowrap">{e.from} - {e.to}</span>
                <span className="text-end text-gray-1100 text-sm">{e.location}</span>
            </div>
        </a>
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