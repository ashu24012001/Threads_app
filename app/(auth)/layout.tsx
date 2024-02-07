import React from "react";
import type { Metadata } from "next";
import {ClerkProvider} from "@clerk/nextjs"
import {Inter} from "next/font/google"
import { dark } from "@clerk/themes";

import '../globals.css'

export const metadata: Metadata = {
    title: 'Auth',
    description: 'Next.js 13 Meta Threads Application'
}

const inter=Inter({subsets: ["latin"]})

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider   
            appearance={{
            baseTheme: dark,
        }}>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}