import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    // design: {
    //   type: "figma",
    //   url: "https://www.figma.com/file/0WUPozGSQ5asK59AojEr89/storybook-%EC%97%B0%EB%8F%99?type=design&node-id=1-15&mode=design&t=XZD0Fn3QjMxTOg7R-0",
    // },
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/0WUPozGSQ5asK59AojEr89/storybook-%EC%97%B0%EB%8F%99?type=design&node-id=1-15&mode=design&t=XZD0Fn3QjMxTOg7R-0",
      accessToken: "figd_xsXi1Y3ik0-3d9nCWqjMzHXulNvh41HzjrgTHLl7",
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
