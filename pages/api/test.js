import { getSession } from "next-auth/react";

const R = async (req, res) => {
  const session = await getSession({ req });
console.log(session)
  if (!session) {
    res.status(400).json({ error: 'not authenticated' });
  } else {
    res.status(200).json({ error: ` u r ${session.user.name}  ` });
  }
};

export default R;
