"üse client";

import { AppThemeProvider } from "@/providers/theme-provider";

interface Props {
  children: React.ReactNode;
}

export function AppProvider({ children }: Props) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
