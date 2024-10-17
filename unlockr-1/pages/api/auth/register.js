import { db } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await db('users').where({ email }).first();

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Insert the new user into the database
    await db('users').insert({ email, password });

    return res.status(201).json({ message: 'User registered successfully' });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

