import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Image Art Generator",
    description: "Generated Images with power of AI",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <header className='w-screen bg-white sticky top-0 left-0 z-50'>
                    <Header />
                </header>
                <main className='sm:p-8 px-4 py-8 w-full bg-[#eef0f2] min-h-[calc(100vh-73px)]'>
                    {children}
                </main>
            </body>
        </html>
    );
}
