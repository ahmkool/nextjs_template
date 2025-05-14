import Service from "@/static/Service";
import ContactBtn from "../menu/elements/ContactBtn";

function Services() {
    return <div id="Services" className="flex text-white min-h-full flex-col items-center bg-slate-800">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">Services</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <Service
                hl="Full-Stack Web Platforms"
                desc="React, Next.js, Node.js, Postgres, OAuth, Stripe — I've built platforms from MVP to production. Examples include Shader Academy, Pocket Robots, and more."
                footer="🌐 Ideal for founders and teams needing a senior engineer who ships fast."
                img="/icons/spa.svg" />
            <Service
                hl="Game & Interactive Prototyping"
                desc="Design and development of interactive 2D games, simulations, and tools using Godot or WebGL. I specialize in programming mechanics, UI, and player interaction — including educational and creative games."
                footer="🎮 Great for educational tools, indie games, or prototypes with a twist."
                img="/icons/api.svg" />
        </div>
        <p className="desktop:text-[40px] mobile:text-[24px] font-bold text-center mb-4">You have a project? Get in Touch</p>
        <ContactBtn title={"Contact Me"} />

    </div>
}

export default Services;