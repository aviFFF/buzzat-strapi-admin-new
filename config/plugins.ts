module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),  // ✅ Correct key name
        api_secret: env('CLOUDINARY_API_SECRET'), // ✅ Correct secret name
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
