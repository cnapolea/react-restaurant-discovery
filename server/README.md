ABOUT YUMMI APP (Mobile first development)

Yummi is a website that has as its final goal the discovery of existing and new restaurants, and it also serves as a social platform for users to share and explore experiences with these establishments.

Main features:

- Restaurants displayed based on location
- Full information about restaurant
- Discovery page for people who found a new restaurant
- Personal profile with users' information, favorite restaurants, bookmarks, and reviews
- Authentication with facebook and google

APP DEVELOPMENT

- Behaviour Driven Development (BDD) as the main testing methodology
- APIs Development as bridge between frontend and backend
- MongoDB as a database

PHASE 1 (Backend development)

1. Priorities definition
2. Code architecture design
3. APIs design
4. Testing functionality

PHASE 2 (Frontend development)

1. Application layout design
2. React setup
3. More to come ...

---

1. Priorities Definition

   [x] 1.1 - Code Architecture Design
   [x] 1.1.1 - Search for best code architecture design
   [x] 1.1.2 - Create proper folder structure
   [x] 1.1.3 - List possible technologies to be used in project

   [x] 1.2 - Models sctructure
   [x] 1.2.1 - Define all models to be used
   [x] 1.2.2 - Define all models structure
   [x] 1.2.3 - Define models possible functionalities
   [] 1.2.3.1 - User should: - Favour restaurants - Search restaurants - Create a new discovery - Create profiles - Edit Profile - Delete profile - Find other users - later - Review restaurants - Rate restaurants
   [] 1.2.3.2 - Restaurant should: - Be favoured - Receive reviews - Receive ratings - Be searched by users - Be located in a map
   [] Reviews - Create reviews - Edit reviews - Delete reviews - Being voted helpful or not
   [] Rating - Create rating / provide rating (edit)

   [x] 1.3 - API sctructure
   [x] 1.3.1 - Define all possible routes, their request types, and more
   [x] 1.3.2 - Define possible route guards

   [] 1.4 - User authentication
   [] 1.4.1 - Sign up functionality
   [] 1.4.2 - Login functionality
   [] 1.4.3 - Logout functionality
   [] 1.4.4 - Session handling //TODO Recap sessions and cookies from youtube

---

MODELS

1. USER

username: {
type: string,
required: true,
unique: true,
}

email : {
type: string,
required: true,
unique: true,
}

password : {
type: string,
required: true,
}

address: {
type: string,
default: ''
},

location:
{
type: String,
default: 'Point',
coordinates: {
type: [Number],
required: true
},
}

avatar: String

facebookId: {
type: string,
unique: true,
default: null,
}

gooleId: {
type: string,
unique: true,
default: null,
}

favorites: {
type: Array[Restaurants objectId],
default: []
}

reviews: {
type: Array[Reviews objectId],
default: []
}

2. RESTAURANT

name: {
type: String,
required: true
},

description: {
type: String,
maxLength: 100,
},

address: {
type: string,
default: ''
},

location:
{
type: String,
default: 'Point',
coordinates: {
type: [Number],
required: true
},
},

reviews: {
type: [Reviews objectId],
default: [],
},

priceRating: {
type: Number,
default: 0
},

qualityRating: {
type: Number,
default: 0
},

schedule {
type: [[Strings]]
},

3. REVIEWS

title: {
type: String,
require: true,
maxLength: 30
},
context: {
type: String,
require: true,
},
mediaUploads: {
type: String
},
restaurantId: Type.ObjectId

4. RATING

price: [Number],
quality: [Number],
priceAverage: Number,
qualityAverage: Number,
restaurantId: Type.ObjectId

API DESIGN

## USER

| GET | /users | Get all users |
| POST | /users | Create a new user |
| GET | /users/{username} | Get individual user |
| PATCH | /users/{username} | Update existing user | Route guard needed |
| DELETE | /users/{username} | Delete existing user | Route guard needed |

## RESTAURANT

| GET | /restaurants | Get all restaurants |
| POST | /restaurants | Create a new restaurant |
| GET | /restaurants?name=XYZ&city=XYZ | Get a list of restaurants base on filters |
| GET | /restaurants/{restaurantId} | Get individual restaurant |
| PATCH | /restaurants/{restaurantId} | Update existing restaurant | Route guard needed |
| DELETE | /restaurants/{restaurantId} | Delete existing restaurant | Route guard needed |

## REVIEW

| GET | /reviews | Get all reviews |
| POST | /reviews | Create a new review |
| GET | /reviews?username=xyz | Get all reviews related to user |
| GET | /reviews?restaurantID=xyz | Get all reviews related to restaurant |
| PATCH | /reviews/{reviewId} | Update existing review | Route guard needed |
| DELETE | /reviews/{reviewId} | Delete existing review | Route guard needed |

## RATING

| GET | /ratings | Get all ratings |
| POST | /ratings | Create a new rating |
| PATCH | /ratings/{ratingId} | Update existing rating | Route guard needed |
| DELETE | /ratings/{ratingId} | Delete existing rating | Route guard needed |
