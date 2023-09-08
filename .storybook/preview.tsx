import type { Preview } from "@storybook/react";
import React from "react";
import { GlobalStyles } from "../src/styles/global-styles";
import Providers from "../src/utils/Providers";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div>
      <Providers>
        <GlobalStyles />
        <Story />
      </Providers>
    </div>
  ),
];
