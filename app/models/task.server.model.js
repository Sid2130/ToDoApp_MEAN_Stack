'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

function validateNotEmpty(passedString){
	return passedString !== '';
}

function validatePriorityRange(passedValue){
	if(passedValue < 1 || passedValue > 5)
		return false;
	else
		return true;
}

/**
 * Task Schema
 */
var TaskSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true,
		validate: [validateNotEmpty, 'Title is required']
	},
	description: {
		type: String,
		trim: true,
		default: 'Not Available'
	},
	priority: {
		type: Number,
		trim: true,
		required: true,
		default: 5,
		validate: [validatePriorityRange, 'Priority should be between 1 to 5']
	},
	status: {
		type: Boolean,
		default: false
	},
	
	user: {
		type: Schema.Types.ObjectId,
		required: true,
	},

	userEmail: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date
	}
});

mongoose.model('Task', TaskSchema);