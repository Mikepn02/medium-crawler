import { Request, Response } from 'express';
import { getArticles } from '../services/medium.service';

export const fetchMediumArticles = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    if (!username) return res.status(400).json({ message: 'Username is required' });

    const articles = await getArticles(username);
    res.json({ articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
