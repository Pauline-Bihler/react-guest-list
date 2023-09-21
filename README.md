## React Guest List

Create a guest list app using React that allows for:

- [ ] Adding a guest using separate first name and last name fields
  - [ ] The first name input needs to have a related label containing `First name`
  - [ ] The last name input needs to have a related label containing `Last name`
  - [ ] A guest should be created upon pressing <kbd>Return</kbd> in the last name input
  - [ ] After a guest is created, both fields need to be cleared again
  - [ ] Newly created guests should be set as **not attending** by default
  - [ ] Each guest (all content and form fields) should be contained inside a div element with the attribute `data-test-id="guest"`
- [ ] Deleting a guest with a button that **either**:
  - [ ] Contains the text `Remove`
  - [ ] Has an `aria-label` attribute which starts with `Remove` (eg. `Remove <first name> <last name>`)
- [ ] Setting a guest as "attending" by clicking on a checkbox
  - [ ] The checkbox needs to have an `aria-label` which contains the text `attending` (eg. `<first name> <last name> attending status`) - the text can be uppercase or lowercase
  - [ ] On the first click of the attending checkbox, the guest needs to be set to attending (the checkbox needs to be checked)
  - [ ] On the second click of the attending checkbox, the guest needs to be set to not attending (the checkbox needs to be unchecked)
- [ ] Set up [this API](https://github.com/upleveled/express-guest-list-api-memory-data-store) and read the docs to understand how you can use it to store and retrieve data:
  - [ ] Save any changes to the API
  - [ ] Load the guest list from this API
- [ ] While the guest list is first loaded from the API (on page load):
  - [ ] Show a loading message containing the text `Loading...`
  - [ ] Disable the form fields

The default view should show all guests in the list.

## Resources used:

# Making sure user enters a valid name

-https://www.w3schools.com/jsref/jsref_trim_string.asp#:~:text=The%20trim()%20method%20removes,not%20change%20the%20original%20string.

# Clearing input fields once user clicks return:

- https://devpractical.com/clear-input-field-after-submit-react/
- https://simplefrontend.com/clear-form-after-submit-in-react/#:~:text=Clear%20input%20after%20submit,-React%20docs%20recommend&text=Because%20they%20get%20their%20value,an%20empty%20string%20or%20null.&text=Clicking%20the%20'Save'%20button%20sets,will%20be%20empty%20as%20well.
