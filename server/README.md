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

   1.1 - Code Architecture Design
   1.1.1 - Search for best code architecture design
   1.1.2 - Create proper folder structure
   1.1.3 - List possible technologies to be used in project

   1.2 - Models sctructure
   1.2.1 - Define all models to be used
   1.2.2 - Define all models structure
   1.2.3 - Define models possible functionalities

   1.3 - API sctructure
   1.3.1 - Define all possible routes, their request types, and more
   1.3.2 - Define possible route guards

   1.4 - User authentication
   1.4.1 - Sign up functionality
   1.4.2 - Login functionality
   1.4.3 - Logout functionality
   1.4.4 - Session handling //TODO Recap sessions and cookies from youtube

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

location: {
type: String,
default: 'Point',
},
coordinates: {
type: [Number],
required: true
}
},

avatar: String

facebookId: {
type: string,
unique: true,
default: null,
}

facebookId: {
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

location: {
type: String,
default: 'Point',
},
coordinates: {
type: [Number],
required: true
}
},

reviews: {
type: [Reviews objectId],
default: [],
}

priceRating: {
type: Number,
default: 0
}

qualityRating: {
type: Number,
default: 0
}

schedule {
type: [[Strings]]
}

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
}
restaurantId: Type.ObjectId

4. RATING

price: [Number],
quality: [Number],
priceAverage: Number,
qualityAverage: Number,
restaurantId: Type.ObjectId
