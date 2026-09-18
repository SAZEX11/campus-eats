campus-eats/
├── config/
│   └── db.js                  (Data layer support — database connection pool)
├── controllers/
│   ├── homeController.js      (Controller — restaurants + stats + popular items)
│   ├── aboutController.js     (Controller)
│   ├── menuController.js      (Controller)
│   └── orderController.js     (Controller — full CRUD: create, read, update, cancel)
├── models/
│   ├── Restaurant.js          (Model — restaurant queries)
│   ├── MenuItem.js            (Model — menu item queries & validation)
│   └── Order.js               (Model — CRUD, aggregation queries, and db.tx transaction)
├── routes/
│   └── index.js               (Routing — /, /about, /restaurants/:id/menu, POST /orders, GET /orders/:id, POST /orders/:id/update, POST /orders/:id/cancel)
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs              (View — hero + live stats bar + popular items grid)
│   ├── about.ejs
│   ├── menu.ejs               (View — order form securely sending itemId)
│   └── order_confirmation.ejs (View — real database order, with quantity update and cancel forms)
├── public/
│   ├── css/
│   │   └── styles.css         (Updated with styles for quantity inputs, stats bar, and button variants)
│   └── js/
├── app.js
├── .env
├── .gitignore
├── nodemon.json
└── package.json