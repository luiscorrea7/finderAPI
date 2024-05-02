export const startRes = async () => {
  return ({
    uptime: `${process.uptime()}`,
    data: {
      msg: `The API is online`,
    },
    timestamp: `${Date.now()}`,
  });
};