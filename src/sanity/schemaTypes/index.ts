import { type SchemaTypeDefinition } from 'sanity';
import product from './allProduct';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
};
