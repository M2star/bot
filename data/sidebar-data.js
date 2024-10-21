import { RiText, RiImage2Fill, RiListCheck, RiProductHuntFill, RiGroup2Fill } from 'react-icons/ri';

export const sidebarData = [
    {
        id: "1",
        name: "Text",
        type: "text",
        icon: <RiText />
    },
    {
        id: "2",
        name: "Media",
        type: "media",
        icon: <RiImage2Fill />
    },
    {
        id: "3",
        name: "List Catalogue",
        type: "list-catalogue",
        icon: <RiListCheck />
    },
    {
        id: "4",
        name: "Single Product",
        type: "single-product",
        icon: <RiProductHuntFill />
    },
    {
        id: "5",
        name: "Multi Product",
        type: "multi-product",
        icon: <RiGroup2Fill />
    }
];
