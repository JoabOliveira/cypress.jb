describe('Api Adopet', () => {
    
        it('Mensagens da API', () => {
            cy.request({
             method: 'GET' ,
             url: 'https://adopet-api-i8qu.onrender.com/mensagem/a49066fe-523e-4885-b1ce-5b738195532f',
            headers: Cypress.env()

            }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')

            })
        })
 
        it('login', () => {
            cy.request({
                method: 'POST' ,
                url: 'https://adopet-api-i8qu.onrender.com/adotante/login',
                headers: Cypress.env()
                   
            }).then((res) => {
                expect(res.status).to.be.equal(201)
                expect(res.body).is.not.empty
                                  
            })
        })
    })
