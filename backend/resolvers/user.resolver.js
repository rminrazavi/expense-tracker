import { users } from "../dummyData/data.js";
const userResolver = {
  Query: {
    users: (_, { req, res }) => {
      return users;
    },
  },
  Mutation: {},
};

export default userResolver;
