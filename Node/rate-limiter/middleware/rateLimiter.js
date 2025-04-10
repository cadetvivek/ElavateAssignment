// middleware/rateLimiter.js

const rateLimitMap = new Map(); // Stores user request info

const RATE_LIMIT = 100;         // 100 requests
const WINDOW_SIZE = 60 * 60 * 1000; // 1 hour in milliseconds

const rateLimiter = (req, res, next) => {
  const userIP = req.ip;
  const currentTime = Date.now();

  if (!rateLimitMap.has(userIP)) {
    // First request from user
    rateLimitMap.set(userIP, { count: 1, startTime: currentTime });
    return next();
  }

  const userData = rateLimitMap.get(userIP);
  const timeElapsed = currentTime - userData.startTime;

  if (timeElapsed < WINDOW_SIZE) {
    // Within the same window
    if (userData.count < RATE_LIMIT) {
      userData.count++;
      return next();
    } else {
      return res.status(429).json({ message: 'Too many requests. Please try again later.' });
    }
  } else {
    // Reset the counter and start time
    rateLimitMap.set(userIP, { count: 1, startTime: currentTime });
    return next();
  }
};

module.exports = rateLimiter;
