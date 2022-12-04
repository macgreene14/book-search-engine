const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    // args = user, id, username
    getUser: async (parent, args) => {
      return await User.findOne({
        $or: [{ _id: args ? args._id : args.id }, { username: args.username }],
      });
    },

    addUser: async (parent, args) => {
      const user = await User.create(args.bookBody);
      const token = signToken(user);
      return { user, token };
    },

    loginUser: async (parent, args) => {
      const user = await User.findOne({
        $or: [{ username: body.username }, { email: body.email }],
      });
      const token = signToken(user);
      if (user && correctPw) {
        const token = signToken(user);

        return { token, user };
      } else {
        console.log("Username or Password is Incorrect");
        return;
      }
    },
  },

  saveBook: async (parent, args) => {
    const updatedUser = await User.findOneAndUpdate(
      { _id: args._id },
      { $addToSet: { savedBooks: args.bookBody } },
      { new: true, runValidators: true }
    );
    return updatedUser;
  },

  deleteBook: async (parent, args) => {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { savedBooks: { bookId: params.bookId } } },
      { new: true }
    );
    return updatedUser;
  },
};

module.exports = resolvers;
