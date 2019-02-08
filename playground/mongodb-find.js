//const MongoClient = require('mongodb').MongoClient;
const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}, (err, client) => {

  if(err){
      return console.log('Unable to connect to database');
  }

  console.log('connected to mongodb');

  const db =client.db('TodoApp');

  // db.collection('Todos').find().toArray().then( (docs) => {
  //  console.log('Todos');
  //  console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  // db.collection('Todos').find({_id:new  ObjectID('5c5befe0b7ecbb01c857375e')}).toArray().then( (docs) => {
  //  console.log('Todos');
  //  console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then( (count) => {
  //  console.log('Todos', count);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Neeraj Agrawal'}).toArray().then( (docs) => {
   console.log('Users');
   console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch users', err);
  });



  client.close();

});
