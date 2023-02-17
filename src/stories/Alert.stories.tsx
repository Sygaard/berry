import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Alert } from "../components";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Default: ComponentStory<typeof Alert> = () => (
  <Alert>Message</Alert>
);
