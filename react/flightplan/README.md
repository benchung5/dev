Flight Tracker
===============

> A simple flight feed/notification prototype thingy

## Requirements

- [node.js](https://nodejs.org/en/)

## Summary

Simple feed of departures and arrivals for American Airlines flights in the JFK (NY) airport.
Lookup flights by flight number (can just use 100 to test it). Clicking on
a flight brings up a modal that promps you for a phone number.
Since it's just a front end demonstration, the value is just stored in state. For the future it could be
stored in a database and sent as a push notification when the flight delays, etc. happen.

## To install:
```
	> npm install
```

## To run:
```
	> npm start
```

To preview:
http://localhost:3000/