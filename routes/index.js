import { ClassCtrl } from '../controllers';
import { SchemaValidator, CacheData } from '../middleware';
const validateRequest = SchemaValidator(true);

module.exports.init =  (router) => {
  router.post('/class', validateRequest, ClassCtrl.addNew);
  router.get('/upcoming-classes', CacheData, ClassCtrl.getUpcomming);
}