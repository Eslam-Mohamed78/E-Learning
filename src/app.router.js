import connectDB from "../DB/connection.js";

const appRouter = (app, express) => {
  app.use(express.json());

  app.all("*", (req, res) => {
    return res.json({ message: "inVaild Path" });
  });

  connectDB();
};

export default appRouter;
