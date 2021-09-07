module.exports = {
  testEnvironment: 'jest-environment-jsdom', // This is the default
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },

  snapshotSerializers: [
    '@emotion/jest/serializer' /* if needed other snapshotSerializers should go here */,
  ],
}
