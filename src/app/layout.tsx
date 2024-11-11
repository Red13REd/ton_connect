"use client";
import localFont from "next/font/local";
import "./globals.css";
import {TonConnectUIProvider} from "@tonconnect/ui-react";
import {ReactCardFlipProvider} from "@/ReactCardFlipProvider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TonConnectUIProvider manifestUrl="https://red13red.github.io/ton_connect/tonconnect-manifest.json">
            <ReactCardFlipProvider>
                {children}
            </ReactCardFlipProvider>
        </TonConnectUIProvider>
        </body>
        </html>
    );
}
