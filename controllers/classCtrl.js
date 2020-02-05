import { Class } from '../models';

module.exports = {
  addNew : (req, res ) => {
    let newClass = new Class(req.body);
    newClass.save(req.body, (err, saved) => {
      if(err) return res.status(500).send({success: false, message:"Please try again"});
      res.send({success: true, message: "New class added"})
    })
  },
  getUpcomming :  (req, res ) => {
    Class.find( {"start": { "$gte": new Date()} }, (err, classes)=> {
      if(err) return res.status(500).send({success: false, message:"Please try again"});
      res.send({success: true, classes})
    });
  }
}