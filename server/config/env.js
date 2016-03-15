module.exports = {
  "port": process.env.TW_API_PROD_PORT || 3000,

  "twitter": {
    "consumerKey": process.env.TW_API_CONSUMER_KEY,
    "consumerSecret": process.env.TW_API_CONSUMER_SECRET,
    "accessToken": process.env.TW_API_ACCESS_TOKEN,
    "accessTokenSecret": process.env.TW_API_ACCESS_TOKEN_SECRET,
    "callBackUrl": process.env.TW_API_CALLBACK_URL
  }
};