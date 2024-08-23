describe('Testes na Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Verificar o título "Adopet" na página principal', () => {
        cy.title().should('eq', 'AdoPet');
     
    });

    it('Verificar o texto "Quem ama adota!"', () => {
        cy.contains('p', 'Quem ama adota!').should('be.visible')
    });

    it('Verifica o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!”', () =>{
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
    })

 
})