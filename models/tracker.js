import mongoose from 'mongoose';

const statSchema = mongoose.Schema({

    guitarH: Number,
    guitarS: Number,
    japanH: Number,
    japanS: Number,
    

});

const stat = mongoose.model('stat', statSchema)

export default stat;

//total, daily avg?