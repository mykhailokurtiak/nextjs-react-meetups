// /api/new-meetup
import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://kurtiakm:gEXVYAgmvkxrerOS@cluster0.hoy6g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollections = db.collection('meetups');

    const result = await meetupsCollections.insertOne(data);
    console.log(result);

    client.close();

    await res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
