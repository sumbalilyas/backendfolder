import User from '../models/users';
import bcrypt from 'bcrypt';
import bcryptSaltRounds from '../../config';

export default {

  create: async(req, res, next) => {
    try {
      const { SALT_ROUNDS } = bcryptSaltRounds.bcrypt;

      req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS);

      const data = await User.create(req.body);

      if(!data) return res.send({ status: false, msg: 'User not created, something went wrong' });
      else return res.send({ status: true, msg: 'User created successfully', data });

    } catch(err) {
      return res.send({ status: false, msg: err.message });
    }
  },

  getAll: (req, res, next) => {
    User.find((err, docs) => {
      if (err) next(err);
      else res.send(docs);
    })
  },

  // getById: async (req, res, next) => {

  //     try {
  //         const test = await Test.findById(req.params.id);

  //         if (!test)
  //             return res
  //                 .status(appConfig.STATUS_CODES.NOT_FOUND)
  //                 .send("Model " + alerts.errors.NOT_FOUND);

  //         res.send(test);
  //     }
  //     catch (error) {
  //         next(error);
  //     }

  // },

  // update: (req, res, next) => {

  //     Test.findOneAndUpdate({ _id: req.params.id }, req.body, (err, doc) => {
  //         if (err)
  //             next(err);
  //         else
  //             res.send(doc);
  //     })

  // },

  // delete: (req, res, next) => {

  //     Test.remove({ _id: req.params.id }, err => {
  //         if (err)
  //             next(err);
  //         else
  //             res.send({ message: "Item " + alerts.success.DELETE_SUCCESS });
  //     })

  // }

}