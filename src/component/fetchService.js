import React from 'react'




    var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
  'headers': {
    'Authorization': 'Bearer tTU3gFVUdP',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"email":"anujgarg2590@gmail.com"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

export default function FetchServie(){

    return<div>hii</div>
}

