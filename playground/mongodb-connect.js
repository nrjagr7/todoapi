//const MongoClient = require('mongodb').MongoClient;
const{MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}, (err, client) => {

  if(err){
      return console.log('Unable to connect to database');
  }

  console.log('connected to mongodb');

  const db =client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed : false
  // }, (err, result) =>{
  //
  //     if(err){
  //       return console.log('Unable to insert Todo', err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: 'Mayank Agnihotri',
    age: 29,
    location: 'Dongargarh'
  }, (err, result) =>{

      if(err){
        return console.log('Unable to insert User', err);
      }

      console.log(JSON.stringify(result.ops,undefined,2));
  });



  client.close();

});
