import type { Meta, StoryObj } from '@storybook/react';
import Layout from '.';

const meta: Meta<typeof Layout> = {
  component: Layout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
  args: {},
};
