### A store locator API that serves GeoJSON data. With a simple frontend demo using Mapbox for the UI.

- a back-end API using Express
- a front end using MapBox to work with the API
- Node-geocoder to convert addresses to geojson data
- Mongoose db to store converted geojson data
- Mongoose middleware for creating geojson fields
- Map Box to display geo json fields retrieved by the fetch API and plot locations.

#### Add your MONGO_URI and GEOCODER_API_KEY to the "config/config.env" file.

#### Install dependencies
`npm install`

#### Serve on localhost:5000
`npm run dev` (nodemon)
or
`npm start`

#### Routes
GET    /api/v1/stores # Get Stores

POST   /api/v1/stores # Add Store
body { storeId: "0001", address: "10 main st Boston MA" }

#### Video Tutorial: 

##### https://www.youtube.com/watch?v=9FQrFah9rnc

#### TIMESTAMPS:
- Intro - 0:22
- Create Database - 2:35
- Install Packages - 3:42
- Basic Server Setup - 5:40
- Routes - 9:23
- Stores Controller - 12:50
- Connect to Database - 15:32
- Create Store Model - 19:42
- Fetch Stores Function - 25:50
- Add Store Function - 28:38 (Status code should be "201" created instead of "200")
- Geocoder Setup - 35:04
- Create Mongoose Middleware - 39:40
- Create Static Folder For Frontend - 45:50
- Setup Mapbox - 49:50
- Plotting Points - 55:17
- Fetch Stores For Map - 1:00:37
- Add Store Page - 1:06:25
- Add Store Via Frontend - 1:09:30

#### Code:
### https://github.com/bradtraversy/store...
