Feature: Show and hide event details
 Scenario: An event element should be collapsed by default.
  Given the user is on the event page
  When the user has not interacted with the event element
  Then the event element should be collapsed

 Scenario: User can expand an event to see details.
  Given the user is on the event page
  When the user clicks "see details"
  Then the event element should be expanded.
  
 Scenario: User can collapse an event to hide details.
  Given the user is on the event page
  When the user clicks "hide details"
  Then the event element should be collapsed