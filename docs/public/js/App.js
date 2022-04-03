import spa from "./main.js";
import Home from "./views/Home.js";
spa({
  routes: [
    { path: "/", view: Home },
    { patch: "/home", view: Home },
  ],
});
