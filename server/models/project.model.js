const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const ProjectSchema = new mongoose.Schema({


    user: {
        type: String,
        required: [true, 'User required']
        // validate: {
        //     validator: val => /^[A-Z]/.test(val),
        //     message: 'The first letter need to be uppercase'
        // }
    },
    password: {
        type: String,
        required: [true, 'Password required']
        // minlength: [3, 'Password must be 8 characters or longer']
    },
    role:{
        type: String,
        required: [true, 'Role required']
    }

}, { timestamps: true })

ProjectSchema.pre('save', function(next) {
    bcrypt
      .hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });



module.exports.Project = mongoose.model("Project", ProjectSchema);