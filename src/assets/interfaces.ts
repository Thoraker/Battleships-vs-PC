import { Theme } from "@/components/theme-provider";

export interface CellProps {
  element: 0 | 6 | 7;
  updateBoard: (index: number) => void;
  index: number;
}

export interface GameBoardProps {
  visibleBoard: CellProps[];
  handleClick: (index: number) => void;
}

export interface CellContentProps {
  0: JSX.Element;
  6: JSX.Element;
  7: JSX.Element;
}

export interface ContainerProps {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export type Theme = "dark" | "light" | "system";

export interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

