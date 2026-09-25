```text
campus-eats/
├── config/
│   └── db.js                  (Database connection setup)
├── controllers/
│   ├── homeController.js      (Controller — pages)
│   ├── aboutController.js
│   ├── menuController.js
│   ├── orderController.js
│   └── apiController.js       (Controller — JSON API endpoints)
├── models/
│   ├── Restaurant.js          (Model / entity class — reused by page & API controllers)
│   ├── MenuItem.js            (Model / entity class — reused by page & API controllers)
│   └── Order.js               (Model / entity class — CRUD + aggregation + transactions)
├── routes/
│   ├── index.js               (Routing — page routes)
│   └── api.js                 (Routing — /api/* JSON routes)
├── views/
│   ├── partials/              (Reusable header and footer templates)
│   ├── index.ejs              (View — homepage with stats, popular items, and order lookup box)
│   ├── about.ejs
│   ├── menu.ejs               (View — menu with order forms)
│   └── order_confirmation.ejs (View — order confirmation with update/cancel options)
├── public/
│   ├── css/
│   │   └── styles.css         (Global styles, including .order-lookup layout)
│   └── js/
│       └── orderLookup.js     (Client-side script — uses fetch() to query /api/orders/:id)
├── app.js                     (Express setup — mounts page & API routers, parsers)
├── .env
├── .gitignore
├── nodemon.json
└── package.json