const userRouter = require('./user/user.routes') 
const authRouter = require('./auth/auth.routes')

const registerApiRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
}

module.exports = registerApiRoutes;