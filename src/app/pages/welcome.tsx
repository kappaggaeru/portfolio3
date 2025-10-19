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
            <span className="text-gray-1200 mt-6 mb-3 flex w-full items-center text-[22px] font-medium tracking-tight sm:mt-12">Hey, I&aposm Lautaro Olivera</span>
            <p className="text-gray-600 mt-3">I&aposm a software developer & designer at <a href="">EDSA</a>. I desing and build products. I care deeply over the smallest details and user interface, how it looks, feels, behaves, and I like to make people feel something through my work.</p>
            <div className="flex flex-row gap-3 flex-wrap mt-6">
                {socialButtons}
            </div>
        </div>
    )
}