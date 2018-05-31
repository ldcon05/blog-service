import axios from 'axios';
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
  Blog: {
    category: async (blog) => {
      const category = await axios.post('http://localhost:4000/graphql', {
        query: `{category(id: "${blog.categoryId}") {id name }}`,
        variables: null,
        operationName: null,
      });
      return category.data.data.category;
    },
  },
};
export default resolvers;
