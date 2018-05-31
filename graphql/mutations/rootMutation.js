const rootMutation = `
  type rootMutation {
    createArticle(
      title: String!
      content: String!
      image: String!
      tag: [String]
      likes: Int
      categoryId: String!
    ): Blog
  }
`;

export default rootMutation;
