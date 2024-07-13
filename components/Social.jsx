import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "Github",
    icon: <Github />,
    path: "https://github.com/komangsurya26",
  },
  {
    name: "Linkedin",
    icon: <Linkedin />,
    path: "https://linkedin.com/in/i-komang-agus-surya-sedana-811b85259",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    path: "https://instagram.com/komangsurya_26",
  },
];

const Social = () => {
  return (
    <div className="flex justify-center gap-6">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
