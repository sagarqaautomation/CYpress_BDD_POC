import {
  And,
  Then,
  When,
} from "cypress-cucumber-preprocessor/steps";
import EmployeeActions from "../../integration/PageActions/Functional/EmployeeSubmissionActions";

When("I click on New Submission plus icon", () => {
  EmployeeActions.click_NewEmployeeSubmission();
});

And("I enter the required fields in New Record Screen", () => {
  EmployeeActions.EnterRequiredFields_New_EmployeSubmission();
});

And("I click on save button", () => {
  EmployeeActions.Save_EmployeNewRecord();
  EmployeeActions.Save_ConfirmEmployeNewRecord();
});

Then("I should save the newly created Record", () => {
  EmployeeActions.getNewRecord();
});
