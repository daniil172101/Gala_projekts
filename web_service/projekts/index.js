const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path')

var exec = require('child_process').exec;
var urlencodedParser = bodyParser.urlencoded({ extended: false});
var result = '';

app.use(express.static('stylesheet'))
app.get('/', function(req, res) {
 res.render('index');
})

app.set('view engine', 'ejs')
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

function writeData(){
  const fs = require('fs');
  fs.writeFileSync('./voltageDiv.net', "Voltage divider netlist\nV1 1 0 "+V1+"\nR1 2 1 "+R1+"\nR2 0 2 "+R2+"\n.control\nop\nprint allv\n.endc\n.end");
}


function get_line(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if(+line_no > lines.length){
      throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line_no]);
}


app.post('/result', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  const data = req.body;
  V1 = data.voltage_source;
  R1 = data.resistance_1;
  R2 = data.resistance_2;
  writeData();
  exec('ngspice voltageDiv.net -b -o divLog');
 setTimeout(() =>
 {get_line('./divLog', 9, function(err, line){
    console.log('The line: ' + line);
    result = line;
  });},1000);
 setTimeout(() =>
 {res.render('result', {data1:result})},1500);
})

