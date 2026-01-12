import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cors from "cors";
import path from "path";


dotenv.config();

const app = express();
const __dirname = path.resolve();
// using middleware
app.use(express.json());
app.use(cors());

//importing routes
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

//using routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(express.static(path.join(__dirname, "client", "dist")));

// ✅ SPA fallback (NO MIME issues)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`server is working on port ${process.env.PORT}`);
  connectDb();
});
