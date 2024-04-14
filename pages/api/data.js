import peopleData from '../../data'

export default function people(req,res){
if(req.method === 'GET'){  
  res.status(200).json({peopleData});
}else if(req.method === 'POST'){
let bodyData = req.body.data;
 bodyData = {id:peopleData.length + 1,...bodyData};
peopleData.push(bodyData);
res.status(201).json({ message: 'Data added successfully', newData: bodyData });
}else if(req.method === 'DELETE'){
  const idToDelete = req.body.id;
    const index = peopleData.findIndex(item => item.id === idToDelete);
    console.log(index)
    peopleData.splice(index,1);
    res.status(201).json({ message: 'Data DEleted successfully', newData: index });
    }
}