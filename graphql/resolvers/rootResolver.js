import Blog from '../../mongodb/models/blog';

const resolvers = {
  RootQuery: {
    blogs: () => Blog.find().then(articles => articles),
    blog: (obj, { id }) => Blog.findById(id).then(article => article),
  },
  rootMutation: {
    createArticle: (obj, args) =>
      Blog.create(args).then(createdArticle => createdArticle),
  },
};

export default resolvers;
