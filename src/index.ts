import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 8080;

type RouteHandler = (req: Request, res: Response) => void;

function serveHelloPage(req: Request, res: Response){
    res.send("<!DOCTYPE html><html><body><p>Hello, world!</p></body></html>");
}

const routes: {[key: string]: RouteHandler} = {
    "/": serveHelloPage
}

for (const [route, handler] of Object.entries(routes)){
    app.get(route, handler);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
