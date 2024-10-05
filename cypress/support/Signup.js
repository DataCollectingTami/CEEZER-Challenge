class Signup {

    visit(){
        cy.visit('https://staging.ceezer.com/sign-up/create')
    };

getLogo(){
     return cy.get('[data-testid="logo-CEEZER"]')
}

getHeading(){
    return cy.get('.chakra-heading')
}

getLoginButton(){
    return cy.contains('Log in')
}
//First Page    

getSelectBuyerButton(){
    return cy.get('[data-testid="select-buyer-button"]')
}

getSelectSupplierButton(){
    return cy.get('[data-testid="select-supplier-button"]')
}

getCompanyNameInput(){
    return cy.get('[data-testid="company-name-input"]')
}

fillCompanyNameInput(companyName){
    this.getCompanyNameInput().type(companyName)
}

getEmailInput(){
    return cy.get('[data-testid="email-input"]')
}

fillEmailInput(email){
    this.getEmailInput().type(email)
}

getFirstNameInput(){
    return cy.get('[data-testid="first-name-input"]')
}

fillFirstNameInput(firstName){
    this.getFirstNameInput().type(firstName)
}

getLastNameInput(){
    return cy.get('[data-testid="last-name-input"]')
}

fillLastNameInput(lastName){
    this.getLastNameInput().type(lastName)
}

getSignUpButton(){
    return cy.get('[data-testid="signup-button"]')
}

//Second Page

getRegistrationNumberInput(){
    return cy.get('[data-testid="registration-number-input"]')
}

fillRegistrationNumberInput(registrationNumber){
    this.getRegistrationNumberInput().type(registrationNumber)
}

getVatNumberInput(){
    return cy.get('[data-testid="vat-number-input"]')
}

fillVatNumberInput(vatNumber){
    this.getVatNumberInput().type(vatNumber)
}

getAddressInput(){
    return cy.get('[data-testid="address-input"]')
}

fillAddressInput(address){
    this.getAddressInput().type(address)
}

getCityInput(){
    return cy.get('[data-testid="city-input"]')
}

fillCityInput(city){
    this.getCityInput().type(city)
}

getZipInput(){
    return cy.get('[data-testid="zip-input"]')
}

fillZipInput(zip){
    this.getZipInput().type(zip)
}

getCountrySelect(){
    return cy.get('[data-testid="country-select"]')
}

getCountrySelectItem(index){
    return cy.get(`[data-testid="country-select-item-${index}"]`)

}

getIndustrySelect(){
    return cy.get('[data-testid="industry-select"]')
}

getIndustrySelectItem(index){
    return cy.get(`[data-testid="industry-select-item-${index}"]`)
}

getCreateAccountButton(){
    return cy.get('[data-testid="create-account-button"]')
}   

getBackButton(){
    return cy.get('[data-testid="arrow-back-button"]')
}




    

}

export default Signup;

