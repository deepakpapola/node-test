module.exports = {
  contactMe : (req, res ) => {
  //   let json_format = IValidator.json_schema(ContactSchema.ContactForm, req.body, "invalid request data");
  //   if (json_format.valid == false) return res.status(422).send(json_format.errorMessage);
  //   let {name, email, subject, comment} = req.body;
  //   let filePath = path.join(__dirname, '../templates/contact.html');
  //   fs.readFile(filePath, { encoding: 'utf-8'}, (errread, html) => {
  //   var template = html
  //     .replace(/{name}/g, name)
  //     .replace(/{email}/g, email)
  //     .replace(/{subject}/g, subject) 
  //     .replace(/{comment}/g, comment);
  //   let to = 'deepaksinghpapola0@gmail.com',
  //     cc = 'deepaksinghpapola1@gmail.com',
  //     e_subject = "Someone contacted via portfolio";
  //   MailerCtrl.sendMail(to, cc, e_subject, template,(err,mailsent)=>{
  //     if(err) return res.status(400).send({success: false, message: "Something went wrong. Please try later."});
  //     res.send({ success:  true, message: "Thanks for Contacting"})
  //   });
  // });

  // let thankYou_file = path.join(__dirname, '../templates/thankYou.html');
  // fs.readFile(thankYou_file, { encoding: 'utf-8'}, (errread, html) => {
  //   var template = html.replace(/{username}/g, name);
  //   let e_subject = "Thank you for contacting me";
  //     MailerCtrl.sendMail(email, '', e_subject, template,(err,sent)=>{ });
  //   });
  }
}