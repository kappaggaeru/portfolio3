import Anchor from "../components/anchor";

export default function WelcomePage() {
    const links = [
        {
            icon: 'envelope',
            text: 'Mail',
            link: 'mailto:oliveralautaro99@gmail.com'
        },
        {
            icon: 'twitter',
            text: 'Twitter',
            link: 'https://x.com/kappaggaeru'
        },
        {
            icon: 'github',
            text: 'GitHub',
            link: 'https://github.com/kappaggaeru'
        },
    ]

    const socialButtons = links.map((l, index) => (
        <Anchor key={index} icon={l.icon} text={l.text} link={l.link} />
    ));

    return (
        <div className="grid">
            <span className="text-gray-1200 mt-6 mb-3 flex w-full items-center text-[22px] font-medium tracking-tight sm:mt-12">Hey, I&apos;m Lautaro Olivera</span>
            <p className="text-gray-1100 mt-3">I&apos;m a software developer & designer at <a
                className="text-gray-1200 link-outline hover:border-gray-1200 border-b border-dashed border-gray-800 font-medium transition-colors duration-200 ease-out"
                href="https://www.edsa.com/"
                aria-label="EDSA"
                target="_blank"
                rel="noreferrer">
                EDSA
            </a>. I desing and build products. I care deeply over the smallest details and user interface, how it looks, feels, behaves, and I like to make people feel something through my work.</p>
            <div className="flex flex-row gap-3 flex-wrap mt-6">
                {socialButtons}
            </div>
        </div>
    )
}