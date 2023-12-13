const express = require('express');
const app = express();
const data =[
  {
      id: 1,
      name: "phone",
      price: 100,
      count: 20
  },
  {
      id: 2,
      name: "notebook",
      price: 1500,
      count: 50
  },
  {
      id: 3,
      name: "ipad",
      price: 3000,
      count: 6
  },
  {
      id: 4,
      name: "smartwatch",
      price: 1000,
      count: 15
  },
  {
      id: 5,
      name: "TV",
      price: 700,
      count: 5
  },
  {
      id: 6,
      name: "Speakers",
      price: 200,
      count: 9
  },
  
  {
      id: 7,
      name: "airpods",
      price: 400,
      count: 40
  },
  {
      id: 8,
      name: "phone case",
      price: 50,
      count: 100
  },
  {
      id: 9,
      name: "microphone",
      price: 400,
      count: 50
  },
  {
      id: 10,
      name: "camera",
      price: 1000,
      count: 20
  }
]

app.get('/', (req, res) => {

  res.send("home page")
})

app.get('/data', (req, res) => {

  res.send(data)
})

app.get('/data/:id', (req, res) => {
  const dataID = req.params.id;
  const selectedData = data.find(data => data.id == dataID)
  if (selectedData) {
    res.send(selectedData)
  } else {
    res.status(404).send('mehsul yoxdur')
  }
})

app.listen(4000, () => {
  console.log("hello");
})