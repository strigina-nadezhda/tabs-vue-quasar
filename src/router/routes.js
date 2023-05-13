const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AccountsGrid.vue") },
      {
        path: "/appl",
        component: () => import("pages/OrdersGrid.vue"),
      },
      {
        path: "/appl/:id",
        component: () => import("src/pages/OrderForm.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
