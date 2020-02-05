import mongoose from 'mongoose';

const { Schema } = mongoose;

const classes = new Schema({
    title: String,
    description: String,
    maxNumberOfStudents: Number,
    start: Date,
    end: Date,
    type: {type: String, enum : ['YOGA', 'PILATES', 'CARDIO']},
  },{ timestamps: true });
  
  export default mongoose.model('classes', classes);