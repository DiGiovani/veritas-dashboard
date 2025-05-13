import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <NavigationBar />
      <div className="flex flex-col w-full h-[calc(100vh-96px)] overflow-scroll">
        <div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
