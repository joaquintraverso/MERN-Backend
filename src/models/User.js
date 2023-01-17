import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName:{
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, {
  timestamps: false,
  versionKey: false,
})

const UserModel = model('User', UserSchema);

export default UserModel;