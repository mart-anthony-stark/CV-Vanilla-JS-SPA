function spa(options) {
  const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
  };

  const router = async () => {
    let routes = [];

    if (options.routes) routes = options.routes;

    // TEST ROUTES FOR ACTIVE
    const potentialActiveRoutes = routes.map((route) => {
      return {
        route,
        isMatch: location.pathname === route.path,
      };
    });
    console.log(options.routes);

    let activeRoute = potentialActiveRoutes.find((route) => route.isMatch);

    if (!activeRoute) {
      activeRoute = {
        route: routes[0],
        isMatch: true,
      };
    }
    const view = new activeRoute.route.view();
    document.querySelector("#app").innerHTML = await view.render();

    console.log(activeRoute.route);
  };

  window.addEventListener("popstate", router);

  document.addEventListener("DOMContentLoaded", (e) => {
    document.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(e.target.href);
      }
    });
    router();
  });
}
export default spa;
