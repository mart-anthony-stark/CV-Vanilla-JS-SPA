import spa from "./lib/main";
import Home from "./components/Home.js";

spa({
  routes: [
    { path: "/", view: Home },
    { patch: "/home", view: Home },
  ],
});
