const rootMutation = `
  type rootMutation {
    createArticle(
      title: String!
      content: String!
      image: String!
      tag: [String]
      likes: Int
    ): Blog
  }
`;

export default rootMutation;
