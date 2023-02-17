import React from "react";
import { HomeIcon } from "@heroicons/react/24/solid";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
  <Button leftIcon={<HomeIcon style={{ width: "16px", height: "16px" }} />}>
    Default
  </Button>
);
