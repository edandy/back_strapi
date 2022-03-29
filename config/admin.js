module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '851c69a595d552c4ce0320e1c9af259c'),
  },
});
