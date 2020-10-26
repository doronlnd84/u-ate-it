
// import cors from 'cors';
import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
// app.use('/', require('./routes/index'))
app.use(bodyParser.text());
app.use(bodyParser.json());

const users = Array<any>();

const port = 8090 || process.env.PORT;

//מה ההבדל בין app.get  ל router.get
app.get('/api/users', (request: Request, response: Response) => {
  console.log(users);
  response.send( users );
  });

  app.post('/api/users', (request: Request, response: Response) => {
 const user = { ...request.body };
     users.push(user);
     console.log(users);
    response.json(user);
}),

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

