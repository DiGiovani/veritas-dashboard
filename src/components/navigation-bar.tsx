import Link from "next/link";

export function NavigationBar() {
  return (
    <nav className="flex items-center justify-center gap-4 p-4 text-lg">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
