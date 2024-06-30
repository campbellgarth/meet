# Meet App

The Meet App is a serverless PWA built in React, using AWS. It allows you to find events in a city near you. The application uses the Google Calendar API to fetch upcoming events.

## Key Features

### Users are able to:

Filter events by city

Show/Hide event details

Specify number of events

Use the app when offline

Add an app shortcut to their homescreen

display charts visualizing event details

## Github

You can find the repository for this project at [Github](https://github.com/campbellgarth/meet).

This app is hosted on [Github Pages](https://campbellgarth.github.io/meet/)

## Serverless Architecture

The Meet App uses serverless technology hosted by AWS Lambda. It will implement serverless functions in order to authenticate users. Instead of a traditional server being used to authorize users, serverless functions will be used as an authorization server and generate the necessary tokens. Afterwards, the event data from the Google Calendars API can be retrieved.

Other technologies used include:

#### Rendering:

Create React App

Github Pages

React

Recharts

#### Testing:

Jest

Jest-Cucumber

Puppeteer

## User Stories

### Feature 1: Filter Events By City

As a user,

I should be able to filter events by city,

So that I can easily access the events most relevant to me.

#### Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

Given user hasn’t searched for any city;

When the user opens the app;

Then the user should see a list of upcoming events.

#### Scenario 2: User should see a list of suggestions when they search for a city.

Given the main page was opened,
When user starts typing in the city textbox,

Then the user should receive a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3: User can select a city from the suggested list.

Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing,

When the user selects a city (e.g., “Berlin, Germany”) from the list,

Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details

As a user,

I should be able to show/hide event details

So that I can see more or less information about events as needed.

#### Scenario 1: An event element is collapsed by default.

Given the event page was opened,

When the user has not interacted with the event element,

Then the event element should be collapsed.

#### Scenario 2: User can expand an event to see details.

Given the user was on the event page,

When the user interacts with a collapsed event element,

Then the event element should be expanded.

#### Scenario 3: User can collapse an event to hide details.

Given the user was on the event page,

When the user interacts with an expanded event element,

Then the event element should be collapsed.

### Feature 3: Specify Number of Events

As a user,

I should be able to specify the number of events

So I can customize the number of events shown to me.

#### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.

Given the user was on the main page,

When the user doesn't specify a number of events,

Then the number of events shown should default to 32 events.

#### Scenario 2: User can change the number of events displayed.

Given the user was on the main page,

When the user specifies a number of events,

Then the number of events shown should be equal to the number the user specifies.

### Feature 4: Use the App When Offline

As a user,

I should be able to use the App when offline

So I can seamlessly use the app, regardless of internet connectivity.

#### Scenario 1: Show cached data when there’s no internet connection.

Given the user was offline,

When the user uses the App,

Then cached data is rendered.

#### Scenario 2: Show error when user changes search settings (city, number of events).

Given the user was offline,

When the user changes search settings,

Then the App displays an error.

### Feature 5: Add an App Shortcut to the Home Screen

As a user,

I should be able to have an App Shortcut on the Home Screen,

So that I can quickly access the App on my device.

#### Scenario 1: User can install the meet app as a shortcut on their device home screen.

Given the user was prompted to install the meet app,

When the user installs the meet app,

Then the user can install the meet app as a shortcut on their home screen.

### Feature 6: Display Charts Visualizing Event Details

As a user,

I should be able to see event detail charts,

So that I can better visualize event detail data.

#### Scenario 1: Show a chart with the number of upcoming events in each city.

Given the user was on the main page,

When the user views the main page,

Then they will see a chart with the number of upcoming events in each city.
