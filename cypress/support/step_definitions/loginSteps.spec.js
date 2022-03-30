import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginActions from "../../integration/PageActions/Functional/LoginActions";

Given("I launch the swimlane login Screen", () => {
  LoginActions.launchURL();
});

Then("I Should validate labels in the login Screen", () => {
  LoginActions.validateLabels_LoginScreen();
});

And("I Should validate buttons in the login Screen", () => {
  LoginActions.validateButtons_LoginScreen();
});

And("I Should validate headers and Subheaders in the login Screen", () => {
  LoginActions.validateHeaders_SubHeaders_LoginScreen();
});

When("I enter", (datatable) => {
  LoginActions.enterCredentials_Datatable(datatable);
});

Then("I Should validate Dashboard Url and title", () => {
  LoginActions.dashboardTitle();
  LoginActions.CurrentURl();
});

And("I click on login button in the login Screen", () => {
  LoginActions.loginButton();
});

When(
  "I enter username and password as {string} and {string} in the login Screen",
  (username, password) => {
    LoginActions.enterCredentials_Parameterization(username, password);
  }
);

When("I enter username and password in the login Screen", () => {
  LoginActions.enterCredentials();
});

When(
  'I enter username and password as "(.*?)"$/ and "(.*?)"$/ in the login Screen',
  (username, password) => {
    LoginActions.enterCredentials(username, password);
  }
);

Then("I validate login failed error message", () => {
  LoginActions.loginFailed();
});
