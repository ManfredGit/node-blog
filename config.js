module.exports = {
  // db
  db: 'mongodb://localhost/blog-api',
  // port
  port: process.env.NODE_ENV || 3000,
  // test environment
  test_env: 'test',
  test_db: 'blog-api-test',
  test_port: 3001
};