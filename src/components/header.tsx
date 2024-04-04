import Image from "next/image";

import LogoImg from "/public/logo.svg";
import { Search, UserCircle } from "lucide-react";
import LinkHeader from "./link-header";
import Container from "./container";

const arrayLinkMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];

const Header = () => {
  return (
    <header className="relative w-full h-24 bg-green-primary flex  items-center border-b border-green-dark">
      <Container className="flex items-center justify-between">
        <div>
          <Image
            src={LogoImg}
            alt="logotipo da marca"
            quality={100}
            priority={true}
          />
        </div>
        <div className="flex items-center gap-20">
          <nav>
            <ul className="flex items-center gap-8">
              {arrayLinkMenu.map((link) => (
                <li key={link}>
                  <LinkHeader>{link}</LinkHeader>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Search className="size-6 text-white/40" />
            </button>
            <button className="flex items-center gap-1.5">
              <UserCircle className="size-6 text-white/40" />
              <span className="text-white font-medium">Fazer Login</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
