import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

const Study: CollectionConfig = {
  slug: 'studies',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: true,
    },
    slug,
  ],

};

export default Study;
