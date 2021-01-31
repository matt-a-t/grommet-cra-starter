import Login from "./Login";

const routes = [
  {
    public: true,
    path: "/login",
    Component: Login,
  },
  {
    public: false,
    path: "/private",
    Component: () => <div>Private</div>,
  },
  // this one must go last
  {
    public: true,
    path: "/",
    Component: () => null,
  },
];

export default routes;
