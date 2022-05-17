// comando para auto completar
/// <reference types= "cypress" />

describe ('Teste site Amazon', () => {
    it('deve realizar o login no site da Amazon', () => {

        // cy.visit - visita o site da amazon.com.br
        cy.visit('amazon.com.br');

        // cy.get -  busca um elemento  "Olá,Faça seu login"
        // .click - clica         
        cy.get('#nav-link-accountList').click();

        //cy.get -  busca um elemento "campo e-mail"  
        //.type -  insere o email válido
        cy.get('#ap_email').type('testesautomatizados51@gmail.com');

        //cy.get -  busca um elemento do tipo button
        // .clica - clica no botao "Continuar"
        cy.get('.a-button-inner > #continue').click();

        //cy.get -  busca um elemento "campo password"  
        //.type -  insere a senha válida
        cy.get('#ap_password').type('123456');

        //cy.get -  busca um elemento do tipo button
         // .clica - clica no botao "Fazer login"
        cy.get('#signInSubmit').click();


        
    });

   

});