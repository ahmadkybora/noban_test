const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/", require("./routes"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
});
