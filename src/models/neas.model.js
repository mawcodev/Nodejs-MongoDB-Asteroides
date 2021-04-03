import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NeasSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    a: {
        type: Number,
        required: true
    },
    e: {
        type: Number,
        required: true
    },
    i: {
        type: Number,
        required: true
    },
    om: {
        type: Number,
        required: true
    },
    w: {
        type: Number,
        required: true
    },
    ma: {
        type: Number,
        required: true
    }
});

const Neas = mongoose.model('Neas', NeasSchema);

module.exports = Neas;