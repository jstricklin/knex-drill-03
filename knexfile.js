// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
      connection: 'postgress://localhost/galvanize_memory_v3'
  },

  production: {
    client: 'pg',
      connection: process.env.DATABASE_URL
  }
};
