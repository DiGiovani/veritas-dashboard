import Image from "next/image";
import Link from "next/link";

const items = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Serviços",
    href: "#services",
  },
  {
    label: "Sobre nós",
    href: "#about",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export function NavigationBar() {
  return (
    <nav className="flex items-center justify-between py-0 text-lg px-64">
      <Image
        src="/veritas-logo.png"
        width={96}
        height={96}
        alt="Logo Veritas"
      />
      <div className="flex gap-8">
        {items.map((item) => (
          <Link href={item.href} key={item.href}>
            <p className="font-sans">{item.label}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
