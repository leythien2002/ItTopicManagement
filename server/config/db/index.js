const mongoose=require('mongoose');

async function connect(){
    mongoose.connect('mongodb://localhost:27017/ItTopicManagement', {
        useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('Connected to MongoDB...'))
     .catch(err => console.error('Could not connect to MongoDB...', err));
}

module.exports ={connect}