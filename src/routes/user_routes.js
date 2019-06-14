import express from 'express';
import userController from '../controllers/user_controllers';
const router = express.Router(); //-- creating router

//============================= BASE CALLS
router.route('/')
    // POST /tests
    .post( userController.create )
    // GET /tests
    .get( userController.getAll );

//============================= BASE CALLS
router.route('/:id')
    // PUT /tests/:id
    // .put( test_controller.update )
    // DELETE /tests/:id
    // .delete( test_controller.delete )
    // GET /tests/:id
    // .get( test_controller.getById );

export default router;