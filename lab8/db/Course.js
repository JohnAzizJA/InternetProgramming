const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructor: String,
    price: Number,
    category: { type: String, enum: ['Web Development', 'Design', 'Marketing', 'Business'] },
    enrolledStudents: { type: Number, default: 0 }
});

module.exports = mongoose.model('Course', courseSchema);