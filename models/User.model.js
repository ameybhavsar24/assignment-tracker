const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter your name'],
			trim: true,
		},
	    email: {
	      type: String,
	      required: [true, 'Please enter your email'],
	      unique: true,
	      match: [
	        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
	        'Please enter a valid email address',
	      ],
	    },
	    password: {
	    	type: String,
	    	required: [true, 'Please enter your password'],
	    	minLength: 6,
	    	select: false,
	    },
	    role: {
	    	type: String,
	    	enum: ['student', 'teacher'],
	    	default: 'student'
	    },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
