import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

const app = express();


// Allow any origin to access this API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();

});

// Serve files from the public directory if they exist
app.use(express.static(path.join(__dirname, '../public')));

// Send requests to the api router
app.use('/api', require('./routes/api'));

// Send any other requests to the Angular Application
app.get('*', (req, res) => {
  res.sendfile(path.join(__dirname, '/../public', 'index.html'));
});


app.listen(process.env.PORT || 8080, _ => {
  console.log('Server listening on', process.env.PORT || 8080);
});
