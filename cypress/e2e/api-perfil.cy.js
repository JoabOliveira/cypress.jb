describe('Api Adopet', () => {
    /*const tempoEsperado = Math.random() * 1000*/
    
    it('Nome do perfil', () => {
        cy.request({
        method: 'GET' ,
        url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/a49066fe-523e-4885-b1ce-5b738195532f',
        headers: Cypress.env()
           
        }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('perfil')
        expect(res.body.perfil.nome).to.be.equal('Joab Oliveira')
        /*expect(res.duration).to.be.lte(tempoEsperado)*/
                         
        })
    })
})