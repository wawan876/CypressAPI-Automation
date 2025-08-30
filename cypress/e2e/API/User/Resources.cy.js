
describe('Reqres API Tests', () => {

    const apiKey = 'reqres-free-v1';
    it('should get a list of users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).to.be.gt(0);
        });
    });

    it('should get a single user by ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('id', 2);
            expect(response.body.data).to.have.property('email');
        });
    });

    it('test Update user by ID', () => {
    const apiKey = 'reqres-free-v1';
    const UpdateUsers = {
        email: "wawan@example.com",
        first_name: "Wawan",
        last_name: "Prastyo"
    };

    cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        headers : {
            'Accept': 'application/json',
            'x-api-key': apiKey 
        },
        body: UpdateUsers
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('email', UpdateUsers.email);
        expect(response.body).to.have.property('first_name', UpdateUsers.first_name);
        expect(response.body).to.have.property('last_name', UpdateUsers.last_name);
    });
    });

    it('test patch user change id', () => {
    const apiKey = 'reqres-free-v1';
    const UpdateUsers = {
        id : "3",
    };

    cy.request({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/3',
        headers : {
            'Accept': 'application/json',
            'x-api-key': apiKey 
        },
        body: UpdateUsers
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', UpdateUsers.id);
    });
    });

    it('succes delete user by id', () => {
    const apiKey = 'reqres-free-v1';
    const DeleteUsers  = {
        id : "3",
    };

    cy.request({
        method: 'DELETE',
        url: 'https://reqres.in/api/users/2',
        headers : {
            'Accept': 'application/json',
            'x-api-key': apiKey 
        },
    }).then((response) => {
        expect(response.status).to.eq(204);
        expect(response.body).to.be.empty;
    });
    });
    
    });


