"use client";

import { MobileMenu } from "@/components/mobile-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <SidebarProvider>
          <MobileMenu />
          {children}
        </SidebarProvider>
      </ThemeProvider>
      <Toaster />
    </>
  );
}
