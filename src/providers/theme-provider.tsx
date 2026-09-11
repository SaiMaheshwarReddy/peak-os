"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function AppThemeProvider({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
