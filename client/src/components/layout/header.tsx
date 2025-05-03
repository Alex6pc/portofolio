import type { NavLink } from "@/types";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/custom/mobile-navbar";
import { ThemeToggle } from "@/components/layout/theme-toggle";

interface HeaderProps {
  data: {
    logoText: string;
    navItems: NavLink[];
    cta: NavLink;
  };
}

export function Header({ data }: Readonly<HeaderProps>) {  
  if (!data) return null;
  const { logoText, navItems, cta } = data;
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/logo-trasparent.png" 
          alt="Logo" 
          width={24} 
          height={24}
          className="w-12 h-12"
        />
        <span className="font-heading text-xl font-bold">{logoText}</span>
      </Link>
      <div className="flex items-center gap-10">
        <nav className="hidden items-center gap-10 md:flex justify-end">
          {navItems?.map((item) => (
            <Link
              href={item.href}
              className="flex cursor-pointer items-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
              key={item.text}
              target={item.isExternal ? "_blank" : "_self"}
            >
              {item.text}
            </Link>
          ))}
        </nav>
        {cta && (
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild>
              <Link
                href={cta.href}
                className="cursor-pointer"
                target={cta.isExternal ? "_blank" : "_self"}
              >
                {cta.text}
              </Link>
            </Button>
          </div>
        )}
        {/* <ThemeToggle /> */}
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-background py-4 container text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems?.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="flex w-full cursor-pointer items-center rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
              >
                {item.text}
              </Link>
            ))}

            {cta && (
              <Button asChild size="lg" className="mt-2 w-full">
                <Link
                  href={cta.href}
                  className="cursor-pointer"
                  target={cta.isExternal ? "_blank" : "_self"}
                >
                  {cta.text}
                </Link>
              </Button>
            )}
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
