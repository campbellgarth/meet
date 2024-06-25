Feature: Specify number of events
 Scenario: When user hasn’t specified a number, 32 events are shown by default.
  Given the user is on the main page
  When the user doesn't specify a number of events
  Then the number of events shown should default to 32 events.

 Scenario: User can change the number of events displayed.
  Given the user is on the main page
  When the user specifies a number of events
  Then the number of events shown should be equal to the number the user specifies.
  
