import { ConactCtrl } from '../controllers';
module.exports.init =  (router) => {
    router.post('/contact-me', ConactCtrl.contactMe);

}