import { startRes } from "../services/start.services.js";

export const startAPI = async (req, res) => {
  try {
    const servRes = await startRes(req);
    res.status(200).json(servRes);
  } catch (error) {
    res.status(500).json(error);
  };
};