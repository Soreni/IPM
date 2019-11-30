module.exports = { 

    JWT_KEY: process.env.JWT_KEY || "ipm_jwtprivatekey",
    MONGO_URI: process.env.MONGO_URI|| "mongodb://127.0.0.1:27017/IPMDb",
    PORT: process.env.PORT || 3000
  
  };