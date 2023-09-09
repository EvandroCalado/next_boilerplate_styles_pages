import type { Preview } from '@storybook/react';
import React from 'react';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';
import Providers from '../src/utils/Providers';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.backgroundLight,
        },
        {
          name: 'dark',
          value: theme.colors.backgroundDark,
        },
      ],
    },
  },
};

export const decorators = [
  (Story) => (
    <Providers>
      <GlobalStyles />
      <Story />
    </Providers>
  ),
];
