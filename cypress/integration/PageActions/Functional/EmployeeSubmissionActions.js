import EmployeeSubmissionElements from "../../PageElements/EmployeeSubmissionElements";
const employee = new EmployeeSubmissionElements();

class employeeActions {
  static click_NewEmployeeSubmission() {
    employee.getNewEmployeSubmission().click();
  }

  static EnterRequiredFields_New_EmployeSubmission() {
    cy.randomstring(7).then((data) => {
      console.log(data);
      employee.getFirstName_TextField().type(data);
    });

    cy.randomstring(5).then((data) => {
      console.log(data);
      employee.getLastName_TextField().type(data);
    });

    cy.randomstring(8).then((data) => {
      console.log(data);
      employee.getCity_TextField().type(data);
    });
  }

  static Save_EmployeNewRecord() {
    employee.getEmployeeSubmission_Save().click();
  }

  static Save_ConfirmEmployeNewRecord() {
    employee.getEmpployeeSubmision_ConfirmSave().click();
  }

  static getNewRecord() {
    employee
      .getNewlyCreatedRecord()
      .invoke("text")
      .then((text) => {
        cy.writeFile("cypress\\fixtures\\example.json", {
          recordid: text.replace(/\n\s+/g,'').replace('Copy link',''),
        });
      });
  }
}

export default employeeActions;
