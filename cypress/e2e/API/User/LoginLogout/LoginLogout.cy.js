

describe('Login', () => {
    
   it('succes Logout', () => {
    const apikey = 'reqres-free-v1';
    const loginData = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        body: loginData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key' : apikey
        }
    }).then((response) => {
        // Validasi status request
        expect(response.status).to.eq(200);

        // Validasi yang benar: pastikan respons memiliki properti 'token'
        expect(response.body).to.have.property('token');
        expect(response.body.token).to.be.a('string').and.to.not.be.empty;
    });
});

    it('succes Logout', () => {
    const apikey = 'reqres-free-v1';
    const usertoken = 'QpwL5tke4Pnpja7X4';
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/logout',
        body: {
            token: usertoken
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-api-key' : apikey
        }
    }).then((response) => {
        // Validasi status request
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty;
    });
});

});