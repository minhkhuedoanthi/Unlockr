// pages/api/capsules/create.js
import { query } from '../../../lib/db';
import { sendEmail } from '../../../lib/email';
import formidable from 'formidable';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false, // Disable default body parser for file uploads
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public/uploads';
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: 'File upload error' });

      const { title, note, unlockDate } = fields;
      const mediaPath = files.media ? `/uploads/${files.media.newFilename}` : null;

      try {
        await query(
          'INSERT INTO capsules (title, note, media_path, unlock_date) VALUES ($1, $2, $3, $4)',
          [title, note, mediaPath, unlockDate]
        );

        await sendEmail({
          to: 'user@example.com', // Replace with dynamic email from user
          subject: 'Your Time Capsule is Saved!',
          text: `Your time capsule "${title}" is securely saved and will unlock on ${unlockDate}.`,
        });

        res.status(201).json({ success: true });
      } catch (error) {
        res.status(500).json({ success: false, error: 'Database error' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
