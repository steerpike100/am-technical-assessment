 Feature: Basic Search


Scenario: Basic Search
Given user is on any page of the Quartex Published Site
 When user enters valid search term in the basic search input box
 And the search button is clicked
 Then user is navigated to the Browse All page
 And the first page of search results is displayed
 And the assets listed meet the search criteria        