import isPropValid from "@emotion/is-prop-valid";
import { RenderResult, render } from "@testing-library/react";
import React from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "./theme";

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
};
