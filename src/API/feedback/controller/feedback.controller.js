import { feedbackRes } from "../services/feedback.services.js";

export const feedbackAPI = async (req, res) => {
  try {
    const servRes = await feedbackRes(req);
    res.status(200).json(servRes);
  } catch (error) {
    res.status(500).json(error);
  };
};