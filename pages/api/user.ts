import { NextApiHandler} from "next";
import data from "../../lib/data.json"

const user: NextApiHandler = ((req, res) => {
    res.status(200).json({
       data
    });
});

export default user;
