import spa from "./main.js";
import Home from "./components/Home.js";
spa({
  routes: [
    { path: "/", view: Home },
    { patch: "/home", view: Home },
  ],
});
