This is the backend for FlexIQ Fitness Tracker. It contains APIs: User Authentication, Workout Logging, and Progress Tracking. 
The backend was built using Node.js, Express, and MongoDB.
Deployed on Render and tested on Postman.

Features:
  - Restful API to Create/Read/Update/Delete workouts.
  - Progress Tracking
  - .env
  - Deployed publicly through Render

SetUp:
  - git clone https://github.com/Haroldi3/FlexIQ-Fitness-Tracker
  - cd FlexIQ-Fitness-Tracker
  - npm install
  - On Linux/Unix/Mac
      - cp .env.example .env
  - On Windows
      - copy .env.example .env
  - npm run or npm start

Live on Render:
  https://flexiq-backend.onrender.com

Environment Variables: 
  Mongo_URI = mongodb+srv://FlexIQ:FIUSWEproject@cluster0.ysfhra4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 
