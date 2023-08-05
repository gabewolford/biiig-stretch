export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the project.',
        validation: Rule => Rule.required()
      },
      {
        name: 'website',
        title: 'Website',
        type: 'url',
        description: 'The URL of the live website.',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        description: 'Services provided an technologies used.',
        validation: Rule => Rule.required()
      },
      {
        name: 'year',
        title: 'Year',
        type: 'string',
        description: 'Year project was created or "under construction".',
        validation: Rule => Rule.required()
      },
      {
        name: 'priority',
        title: 'Priority',
        type: 'number',
        description: 'Order to display project in list.',
        validation: Rule => Rule.required()
      },
    ],
  };
  