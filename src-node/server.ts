import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', require('./routes/api'));

app.listen(process.env.PORT || 8080, _ => {
  console.log('Server listening on', process.env.PORT || 8080);
});
