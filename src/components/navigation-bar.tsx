"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";

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
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileNavigationBar />;
  }

  return (
    <nav className="flex items-center justify-between py-0 text-lg px-64 min-h-20">
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

export function MobileNavigationBar() {
  return (
    <nav className="flex items-center justify-center py-0 text-lg  min-h-20">
      <Image
        src="/veritas-logo.png"
        width={64}
        height={64}
        alt="Logo Veritas"
      />
      <SidebarTrigger className="absolute right-4" />
    </nav>
  );
}
