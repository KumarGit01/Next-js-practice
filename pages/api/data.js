import peopleData from '../../data'
export default function handler(req, res) {
  // Set CORS headers to allow requests from all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Optionally, you can allow specific headers and methods
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  if (req.method === 'OPTIONS') {
    // Respond to preflight request
    res.status(200).end();
  } else if (req.method === 'GET') {
    res.status(200).json({ peopleData });
  } else if (req.method === 'POST') {
    let bodyData = req.body.data;
    bodyData = { id: peopleData.length + 1, ...bodyData };
    peopleData.push(bodyData);
    res.status(201).json({ message: 'Data added successfully', newData: bodyData });
  } else if (req.method === 'DELETE') {
    const idToDelete = req.body.id;
    const index = peopleData.findIndex(item => item.id === idToDelete);
    console.log(index)
    peopleData.splice(index, 1);
    res.status(200).json({ message: 'Data DEleted successfully', newData: index });
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
