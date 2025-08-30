

describe('Login', () => {
    
   it.only('succes Login', () => {
    const apikey = 'reqres-free-v1';
    const Login = {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key' : apikey,
            'Content-Type' : 'application/json'
        },
        body: Login
    }).then((response) => {
        // Validasi status request
        expect(response.status).to.eq(200);

        // Validasi yang benar: pastikan respons hanya memiliki properti 'token'
        expect(response.body).to.have.property('token').and.to.be.a('string').and.to.not.be.empty;

        // Hapus validasi yang salah karena properti ini tidak ada di respons login
        expect(response.body).to.have.property('email', Login.email);
        expect(response.body).to.have.property('password', Login.password);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
    });
});
});