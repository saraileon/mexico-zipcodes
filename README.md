<!--
  Title: Mexico Zipcodes
  Description: Mexico Zipcodes REST API / REST API Códigos Postales de México
  Author: saraileon
  -->
  
[![Code Climate](https://codeclimate.com/github/saraileon/mexico-zipcodes/badges/gpa.svg)](https://codeclimate.com/github/saraileon/mexico-zipcodes)
[![Issue Count](https://codeclimate.com/github/saraileon/mexico-zipcodes/badges/issue_count.svg)](https://codeclimate.com/github/saraileon/mexico-zipcodes)

# Mexico Zipcodes
Mexico zipcodes micro service with NodeJS & MongoDB using HapiJS framework.

Data taken from the Mexico postal service ([SEPOMEX](http://www.sepomex.gob.mx/lservicios/servicios/CodigoPostal_Exportar.aspx)).

#### Data as of: April 2017
- Total documents: 144,826
- Unique zipcodes: 32,147

You can find and already hosted version of the api here: [http://mexico-zipcodes.herokuapp.com/](http://mexico-zipcodes.herokuapp.com/)

[http://mexico-zipcodes.herokuapp.com/zipcode/03100](http://mexico-zipcodes.herokuapp.com/zipcode/03100)

## Table Of Contents

- [Search Types](#search-types)
  - [By Zipcode](#by-zipcode)
  - [By State](#by-state)
  - [By Colony](#by-colony)
  - [By Municipality](#by-municipality)
  - [By Zone Type](#by-zone-type)
- [Pagination](#pagination)
- [Setup](#setup)

## Search Types

### By Zipcode

- `/zipcode/{ZIPCODE}`
  [http://mexico-zipcodes.herokuapp.com/zipcode/03100](http://mexico-zipcodes.herokuapp.com/zipcode/03100)

### By State

- `/state/{STATE}`
  [http://mexico-zipcodes.herokuapp.com/state/Tamaulipas](http://mexico-zipcodes.herokuapp.com/state/Tamaulipas)

### By Colony

- `/colony/{COLONY}`
  [http://mexico-zipcodes.herokuapp.com/colony/Centro](http://mexico-zipcodes.herokuapp.com/colony/Centro)

### By Municipality

- `/municipality/{MUNICIPALITY}`
  [http://mexico-zipcodes.herokuapp.com/municipality/Benito%20Juárez](http://mexico-zipcodes.herokuapp.com/municipality/Benito%20Juárez)

### By Zone Type

- `/zone/{ZONE_TYPE}`
  [http://mexico-zipcodes.herokuapp.com/zone/Urbano](http://mexico-zipcodes.herokuapp.com/zone/Urbano)

All search terms have case-insensitive and RegExp search (not accent insensitive, though)

## Pagination

Add at the end of the url:

- `?page={PAGE}&limit={LIMIT}`
  [http://mexico-zipcodes.herokuapp.com/zone/Urbano?page=1&limit=5](http://mexico-zipcodes.herokuapp.com/zone/Urbano?page=1&limit=5)

  You'll get back the following additional arguments:
  - total (total of documents per the search term)
  - limit (limit of data per page)
  - page (current page)
  - pages (total of pages per the search terms)

---

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
- `node server.js --port=5899`
- Open [localhost:5899](http://localhost:5899)

Service: [localhost:5899/zipcode/03100](http://localhost:5899/zipcode/03100)
