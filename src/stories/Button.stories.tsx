
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Meta tanımlaması
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Example/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

export default meta;

// Her hikaye için ayrı ayrı args tanımlıyoruz

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    label: 'Primary Button'
  },
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: 'Secondary Button',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
