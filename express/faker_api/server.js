const express = require("express");
const app = express();
const port = 8000;

const {faker} = require("@faker-js/faker");

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.database.mongodbObjectId()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        id: faker.database.mongodbObjectId(),
        companyName: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

const newUsers = createUser();
const newCompanies = createCompany();


app.get("/api/users/new", (req,res) => {
    res.json(newUsers)
})

app.get("/api/companies/new", (req, res) => {
    res.json(newCompanies)
})

app.get("/api/user/company", (req, res) => {
    res.json({newUsers, newCompanies})
}
)
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
