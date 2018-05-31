import category from './category.graphql';

const blog = `
  type Blog {
    id: String
    title: String
    content: String
    image: String
    tag: [String]
    likes: Int
    category: Category
  }
`;

export default [blog, category];
