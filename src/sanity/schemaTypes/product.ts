import { defineType } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.max(300),
    },
    {
      name: "price",
      type: "number",
      title: "Price",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Chair", value: "Chair" },
          { title: "Sofa", value: "Sofa" },
          { title: "Home", value: "Home" },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
      options: {
        hotspot: true, // Allow cropping and positioning
      },
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
  ],
});
