import express, { Application, Request, Response } from 'express'
import { dirname } from 'path';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//getリクエスト
app.get('/', async (_req: Request, res: Response) => {
    return res.status(200).sendFile(__dirname + '/index.html');
});

//postリクエスト
app.post('/', (req: Request, _res: Response) => {
    return console.log(req.body['document']);
}); 

//サーバ起動
try {
    app.listen(PORT, () => {
        console.log(`dev surver running at: http://localhost:${PORT}/`)
    });
}catch (e) {
    if(e instanceof Error){
        console.error(e.message);
    }
}
