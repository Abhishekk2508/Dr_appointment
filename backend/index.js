import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js";
import reviewRoute from "./Routes/review.js";
import doctorRoute from "./Routes/doctor.js";
import BookingRoute from "./Routes/booking.js";

dotenv.config();

const app = express();
const port = process.env.PORT || PORT:8000;

const corsOptions = {
  origin: true,
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", BookingRoute);

const URI = process.env.MONGO_URL;

if (!URI) {
  console.error("❌ MONGO_URL is missing in .env file");
  process.exit(1); // Stop the server if DB URL is missing
}

// Database connection
mongoose
  .connect(URI)
  .then(() => {
    console.log("✅ MONGO DB Connected");

    // Start the server only after DB connection
    app.listen(port, () => {
      console.log(`🚀 SERVER is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:", err.message);
    process.exit(1); // Exit if database connection fails
  });

// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});
