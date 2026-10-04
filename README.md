```text
campus-eats/
├── config/
│   ├── db.js                   (PostgreSQL — unchanged)
│   ├── mongo.js                (new — MongoDB connection)
│   └── mailer.js               (sendVerificationEmail,sendPasswordResetEmail via Gmail)
├── controllers/
│   ├── homeController.js
│   ├── aboutController.js
│   ├── menuController.js
│   ├── orderController.js
│   ├── apiController.js
│   ├── authController.js       (signup, login, logout, verifyEmail, forgot/reset password)
│   ├── adminController.js      (restaurant admin dashboard — now also loads feedback)
│   ├── superAdminController.js (restaurants + granting admin access)
│   └── feedbackController.js   (new — submitFeedback)
├── middleware/
│   └── auth.js                 (requireAuth, requireAdmin, requireSuperAdmin, requireAuthApi)
├── models/
│   ├── Restaurant.js           (getAllRestaurants and getRestaurantById filter is_active; adds getAllRestaurantsForAdmin, createRestaurantBySuperAdmin, deactivateRestaurant, getRestaurantByOwnerId)
│   ├── MenuItem.js             (adds createMenuItem)
│   ├── Order.js                (createOrder takes and stores customerId)
│   ├── User.js                 (createUser, findByEmail, verifyPassword, markVerified, promoteToAdmin, setResetToken, findByResetToken, resetPassword)
│   └── Feedback.js             (new — createFeedback, getFeedbackForRestaurant)
├── routes/
│   ├── index.js                (adds /signup, /login, /logout, /verify/:token, /forgot-password, /reset-password/:token, /admin/dashboard, /admin/menu, /superadmin/*; POST /orders now behind requireAuth; temporary /mongo-test route removed; adds POST /restaurants/:id/feedback)
│   └── api.js                  (POST /api/orders now behind requireAuthApi)
├── views/
│   ├── partials/
│   │   └── header.ejs          (nav reflects all three roles)
│   ├── signup.ejs              (customer accounts only)
│   ├── signup-success.ejs      
│   ├── login.ejs               (shared login page with forgot-password link)
│   ├── verify-success.ejs      
│   ├── forgot-password.ejs     
│   ├── reset-password.ejs      
│   ├── menu.ejs                (adds the feedback form)
│   ├── admin-dashboard.ejs     (restaurant admin dashboard — adds the Customer Feedback section)
│   └── superadmin-dashboard.ejs
├── app.js                      (adds express-session, res.locals.user, calls connectMongo() once at startup)
├── package.json                (adds mongodb dependency)
└── .env                        (adds SESSION_SECRET, GMAIL_USER, GMAIL_APP_PASSWORD, MONGO_URI)