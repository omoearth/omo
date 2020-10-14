import type { Component } from "../../../kernel/interfaces/component";

export const Login: Component = {
  needsAuthorization: false,
  area: "main",
  layout: "LayoutMain",
  children: [
    {
      area: "main",
      component: "OmoLogin",
      properties: { title: "Follow your passion", image: "/start.jpg", link: "safe" },
      trigger: [],
      children: [
        {
          area: "",
          component: "OmoLogin",
        },
      ],
    },
  ],
};
