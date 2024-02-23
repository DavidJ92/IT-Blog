const bcrypt = require('bcrypt');
const { User } = require('../models');

const auth = {
  // Function to authenticate user
  async authenticateUser(username, password) {
    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return { success: false, message: 'Invalid username or password' };
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return { success: false, message: 'Invalid username or password' };
      }

      return { success: true, user };
    } catch (error) {
      console.error('Error authenticating user:', error);
      return { success: false, message: 'An error occurred while authenticating user' };
    }
  },

  // Function to check if user is logged in
  isLoggedIn(req, res, next) {
    if (req.session.loggedIn) {
      return next();
    }
    res.redirect('/login');
  },

  // Function to check if user is not logged in
  isNotLoggedIn(req, res, next) {
    if (!req.session.loggedIn) {
      return next();
    }
    res.redirect('/');
  },
};

module.exports = auth;
