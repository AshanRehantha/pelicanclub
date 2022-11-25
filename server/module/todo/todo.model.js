const mongoose = require('mongoose');
const opts = { timestamps:true, toJSON: {virtuals: true}}

const TodoSchema = mongoose.Schema({
    task: {
        require: true,
        type: String,
        default: false,
    },
    status: {
        type: String,
    },
}, opts);

TodoSchema.virtual('id').get(function(){
    return this._id.toHaxString();
});

exports.Todo = mongoose.model('todo', TodoSchema);
exports.TodoSchema = TodoSchema;