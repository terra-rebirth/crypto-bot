process.env.TZ = 'UTC';
const jestSetup = async () => {
  Object.defineProperty(performance, "now", {
    value: jest.fn(),
    configurable: true,
    writable: true
  });
};

module.exports = jestSetup;
