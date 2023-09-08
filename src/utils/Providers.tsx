"use client";

import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import { theme } from "../styles/theme";

interface IAuthProvider {
  children: React.ReactNode;
}

export default function Providers({ children }: IAuthProvider) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
