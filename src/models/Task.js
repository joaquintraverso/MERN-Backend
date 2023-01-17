import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description:{
    type: String,
    required: true,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: false,
  versionKey: false,
})

const TaskModel = model('Task', TaskSchema);

export default TaskModel;