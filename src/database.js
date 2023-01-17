import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(
      'mongodb://localhost:27017/crud-mongo',
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
