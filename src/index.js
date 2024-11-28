import AppController from "./controllers/AppController.js";
import dotenv from "dotenv";
dotenv.config();

const App = new AppController();
await App.init();
