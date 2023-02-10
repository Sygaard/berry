import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
  <Button>Default</Button>
);
