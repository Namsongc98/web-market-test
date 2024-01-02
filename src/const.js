const menuHome = [
    { id: 1, title: "home page 1" },
    { id: 2, title: "home page 2" },
    { id: 3, title: "home page 3" },
    { id: 4, title: "home page 4" },
    { id: 5, title: "home page 5" },
  ];
  const menuProperty = [
    {
      title: "Property List",
      children: [
        { id: 1, title: "Property List" },
        { id: 2, title: "Property List Sidebar V1" },
        { id: 3, title: "Property List Sidebar V2" },
      ],
    },
    {
      title: "Property Grid",
      children: [
        { id: 1, title: "Property Grid" },
        { id: 2, title: "Property Grid Sidebar V1" },
        { id: 3, title: "Property Grid Sidebar V2" },
      ],
    },
    {
      title: "Property Detail ",
      children: [
        { id: 1, title: "Property Detail" },
        { id: 2, title: "Property Detail V1" },
        { id: 3, title: "Property Detail V2" },
      ],
    },
    {
      title: "Property Map",
      children: [
        { id: 1, title: "Property Half Map v1" },
        { id: 2, title: "Property Half Map V2" },
        { id: 3, title: "Property Half Map V3" },
      ],
    },
  ];
  const menuPage = [
    { id: 1, title: "About Us" },
    { id: 2, title: "Faq's" },
    { id: 3, title: "Pricing" },
    { id: 4, title: "Error" },
    {
      id: 5,
      title: "Agents",
      children: [
        {id:1, title: "Agents" },
        {id:2, title: "Agents Detail" },
        {id:3, title: "Agents Slider V1" },
        {id:4, title: "Agents Slider v2" },
      ],
    },
    {
      id: 6,
      title: "Agencies",
      children: [
        {id:1, title: "Agencies" },
        {id:2, title: "Agencies Detail" },
        {id:3, title: "Agencies Slider V1" },
        {id:4, title: "Agencies Slider v2" },
      ],
    },
    { id: 7, title: "Dashboard" },
  ];
  const blogMenu = [
    {id:1, title: "Blog List" },
    {id:2, title: "Agents Grid" },
    {id:3, title: "Agents Detail" },
  ];
 export const navHeader = [
    { id: 1, page: "Home", children: menuHome },
    { id: 2, page: "Property", children: menuProperty },
    { id: 3, page: "Page", children: menuPage },
    { id: 4, page: "Blog", children: blogMenu },
    { id: 5, page: "Contact" },
  ];