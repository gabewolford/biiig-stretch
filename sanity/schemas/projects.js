export const projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "URL",
      name: "uRL",
      type: "url",
    },
    {
      title: "Year",
      name: "year",
      type: "number",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 3,
    },
  ],
};
