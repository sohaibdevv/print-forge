import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
              {/* Desktop logo */}
              <Image
                src="/printforge-logo.svg"
                alt="PrintForge Logo"
                width={200}
                height={40}
                className="w-[200px] h-auto hidden md:block"
                priority
              />
              {/* Mobile logo */}
              <Image
                src="/printforge-logo-icon.svg"
                alt="PrintForge Logo"
                width={40}
                height={40}
                className="w-[40px] h-auto block md:hidden"
                priority
              />
            <ul className="flex items-center gap-2.5">
              <p>3D Models</p>
              <p>About</p>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
