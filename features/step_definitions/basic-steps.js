const { After, Given, Then, When } = require("cucumber");

After(async function() {
  return await this.closeHomePage()
})

Given("I visit the site", async function() {
  return await this.openHomePage();
});

Then('I should see {string}', async function(content) {
  return await this.pageHasTextContent(content)
});

When('I click {string}', async function(btnName) {
  return await this.clickOnButton(btnName.toLowerCase())
});

Then('I fill in {string} with {string}', async function(field, content) {
  return await this.fillFormField(field.toLowerCase(), content)
});

Then('I should have {int} contact inw my address book', async function(int) {
  return 'pending'
});

Then('I should not see {string}', async function(string) {
  return 'pending'
})