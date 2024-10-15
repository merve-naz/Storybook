import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within, expect } from '@storybook/test';

import { LoginForm } from './Form';
import { MantineProvider } from '@mantine/core';
import React from 'react';

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: { action: 'submit' },
  },
  decorators: [
    (Story) => (
      <MantineProvider>
        {/* Her hikaye MantineProvider ile sarılıyor */}
        <Story />
      </MantineProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('email'), 'merve@provider.com');
    await userEvent.type(canvas.getByTestId('password'), '12345678');
    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!',
      ),
    ).toBeInTheDocument();
  },
};