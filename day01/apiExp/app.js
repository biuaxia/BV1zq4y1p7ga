import express from "express";

import router from "./router/user.js";

const app = express();

app.use('/api', router);

app.listen(80, () => {
    console.log("server listening on http://127.0.0.1:80")
})