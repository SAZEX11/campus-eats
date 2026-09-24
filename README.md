```text
campus-eats/
├── config/
│   └── db.js
├── controllers/
│   ├── homeController.js       (Controller — pages)
│   ├── aboutController.js
│   ├── menuController.js
│   ├── orderController.js
│   └── apiController.js        (Controller — JSON API, new in Lab 5)
├── models/
│   ├── Restaurant.js          (Model / entity class — reused by page & API controllers)
│   ├── MenuItem.js            (Model / entity class — reused by page & API controllers)
│   └── Order.js               (Model / entity class — CRUD + aggregation + transactions)
├── routes/
│   ├── index.js               (Routing — page routes)
│   └── api.js                 (Routing — /api/* JSON routes, new in Lab 5)
├── views/
│   ├── partials/
│   ├── index.ejs               (View — restaurants + stats bar + popular items)
│   ├── about.ejs
│   ├── menu.ejs                (View — order form sends itemId)
│   └── order_confirmation.ejs  (View — real order, with update and cancel forms)
├── public/
├── app.js                     (Mounts page & API routers, parses urlencoded & express.json)
├── .env
├── .gitignore
├── nodemon.json
└── package.json