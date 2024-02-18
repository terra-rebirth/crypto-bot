process.env.TZ = 'UTC';
const jestSetup = async () => {
  // In your jest.setup.js file
  jest.useFakeTimers();
};

module.exports = jestSetup;
