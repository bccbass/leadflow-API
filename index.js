import app from './app.js'
import dotenv from 'dotenv'
dotenv.config();


const PORT = process.env.PORT || 8000


  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
  });



