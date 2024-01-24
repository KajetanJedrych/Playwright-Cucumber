Feature: User Authentication tests

  Background: 
    Given User navigates to the application
    

  Scenario: Login should be success
    And User enter the username as "standard_user"
    And User enter the password as "secret_sauce"
    When User click on the login button
    Then Login should be success

  Scenario: Login should not be success
    Given User enter the username as "standard_user"
    Given User enter the password as "zaq1qwer"
    When User click on the login button
    But Login should fail