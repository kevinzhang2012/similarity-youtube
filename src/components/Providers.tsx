'use client'

import React from "react";
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

export type ProvidersProps = { children: React.ReactNode }
export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return <ThemeProvider attribute='class' defaultTheme="system" enableSystem>

        <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
};

export default Providers;