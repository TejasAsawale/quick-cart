const express = require('express');  
const dbConnect = require('./config/dbConnect');
var cors = require('cors')
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const { notFound, errorHandler } = require('./middlewares/errorHandler');

// Import routes
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoute');
const categoryRouter = require('./routes/prodcategoryRoute');
const blogcatRouter = require('./routes/blogcategoryRoute');
const brandRouter = require('./routes/brandRoute');
const couponRouter = require('./routes/couponRoute');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to database
dbConnect();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// API Routes
app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogcatRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);

// Error Handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
});