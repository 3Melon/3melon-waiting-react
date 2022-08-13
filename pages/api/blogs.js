export default function handler(req, res) {
  if (req.method == "GET") {
    //Process GET request
    console.log(res.status(200).json());
  } else {
  }
}
