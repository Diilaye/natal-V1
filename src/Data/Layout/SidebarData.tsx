import { Href } from "@/Constant";
import { MenuItem } from "@/Types/LayoutTypes";

export const UserListData = [
  {
    icon: "Profile",
    text: "Account",
    href: Href,
  },
  {
    icon: "Message",
    text: "Inbox",
    href: Href,
  },
  {
    icon: "Document",
    text: "Task",
    href: Href,
  },
];

export const MenuList: MenuItem[] | undefined = [
  {
    title: "Pages",
    Items: [
      {
        icon: "Paper-plus",
        id: 24,
        active: false,
        path: "/pages/sample_page",
        title: "Sample Page",
        type: "link",
      },
    ],
  },
  {
    title: "Miscellaneous",
    Items: [{ id: 33, path: "https://support.pixelstrap.com/portal/en/signin", icon: "Ticket", type: "link", active: false, title: "Support Ticket" }],
  },
];
