export const feedbackRes = async (req) => {
  console.log(req.ip);
  return ({
    uptime: `${process.uptime()}`,
    data: {
      msg: `feedback working`,
    },
    timestamp: `${Date.now()}`,
  });
};