const rootQuery = `
  type RootQuery {
    blogs: [Blog]
    blog(id: String!): Blog
  }
`;

export default rootQuery;
