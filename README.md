# Mexico Zipcodes
Mexico zipcodes micro service with NodeJS & MongoDB using HapiJS framework.

Data taken from the Mexico postal service ([http://www.sepomex.gob.mx/lservicios/servicios/CodigoPostal_Exportar.aspx](SEPOMEX)).

Total data: 144,826

Unique zipcodes: 32,147

You can find and already hosted version of the api here: [http://mexico-zipcodes.herokuapp.com/](http://mexico-zipcodes.herokuapp.com/)

[http://mexico-zipcodes.herokuapp.com/zipcode/03100](http://mexico-zipcodes.herokuapp.com/zipcode/03100)

## Setup
Use instructions below to setup the repo and run the project:

### Dependencies
The following dependencies are required to setup and run this project locally:

- NodeJS
- NPM/Yarn
- MongoDB

### 1. Clone The project

- `git clone https://github.com/saraileon/mexico-zipcodes.git`
- `cd mexico-zipcodes`

### 2. Setup database indexes

From shell run once:

- `DB=db_index node server.js`

### 3. Install node_modules

- `npm install OR yarn`

### 4. Populate database

If you are in a Linux/Unix shell

- `cd data`
- `for filename in *; do mongoimport -d mexico_zipcodes -c zipcodes --type json --file $filename;  done`

### 5. Run the service

- `cd ..`
- `nodemon server.js --port=5899`
- Open [localhost:5899](http://localhost:5899)

Service: [localhost:5899/zipcode/03100](http://localhost:5899/zipcode/03100)
