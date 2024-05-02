export const feedbackRes = async (req) => {
  const clientIP = req.socket.remoteAddress;
  console.log(clientIP)
  return ({
    uptime: `${process.uptime()}`,
    data: {
      msg: `feedback working`,
    },
    timestamp: `${Date.now()}`,
  });
};