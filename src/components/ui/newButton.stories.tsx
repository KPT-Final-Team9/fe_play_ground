import { Button } from '@/components/ui/button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Test/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <>
      <Button variant="destructive">Click me!</Button>
      <Button
        variant="outline"
        className="bg-black">
        Click me!
      </Button>
      <Button>Click me!</Button>
      <Button size="sm">Click me!</Button>
    </>
  ),
};

export const Primary2: Story = {
  args: {
    variant: 'ghost',
    children: 'Primary',
    className: 'bg-white p-3 font-bold',
  },
  decorators: [Story => <Story />],
};

export const Primary3: Story = {
  args: {
    variant: 'outline',
    children: 'hi',
    className: 'bg-white px-20 font-bold',
  },
  decorators: [Story => <Story />],
};
