# Check Bills

É uma plataforma onde pode-se consultar linhas digitáveis de um título bancário e pagamento de concessionárias, verificando se a mesma é válida ou não.

informações para calculo e validação dos dígitos verificadores foram pegas nestes documentos:

- **[Documentação Título](https://storage.googleapis.com/slite-api-files-production/files/b8def5e9-f732-4749-88ea-25270cb71c4d/Titulo.pdf)**
- **[Documentação Convênio](https://storage.googleapis.com/slite-api-files-production/files/222c4ec7-9056-4149-aa42-e66b135f523a/Convenio.pdf)**
  

Para instalar as dependências do projeto, basta rodar o comando `yarn`  em seu terminal. Você pode verificar se possui utilizando o comando `yarn --version`, caso não possua pode instala-lo  utilizado o comando `npm install --global yarn`.

<br>

## Base URL
#

```
http://localhost:8080/
```

A aplicação roda na porta ::8080, porém pode ser alterada a com a seguinte **variável** de ambiente `PORT=novoNumero` 

Após a instalação das dependências você pode rodar a aplicação no terminal de sua maquina com o seguinte comando `yarn start`. Caso a variável de ambiente não tenha sido alterada ela irá rodar na porta [**http://localhost:8080/**](http://localhost:8080/) , caso senha alterado, rodará na porta  [**http://localhost:novoNumero/**](http://localhost:8080/).

## Endpoints:

- **boleto:**
    - GET - /boleto/:linhaDigitaveis
        
        Linha digitável deve ser apenas número e ter 47 ou 48 dígitos. 
        
        Caso a linha digitáveis enviada seja inválida (Dígitos verificadores não estão de acordo com o informado), acusará erro.
        <br>
        Requisição correta → retorna as chaves: barCode, expirationDate (se existir) e amount.
        
        ```json
        RESPONSE 200 - OK
        {
        	"barCode": "00190500940144816060680935031337370000000100",
        	"expirationDate": "31/12/2007",
        	"amount": "1.00"
        }
        ```
        
				
        <br>
				Requisição com maior ou menor quantidade de dígitos:
        
        ```json
        RESPONSE 400 - BAD REQUEST
        {
        	"error": "Digit line must contain 48 or 47 digits"
        }
        ```
        <br>
        Requisição com linha digitáveis diferente de números:
        
        ```json
        RESPONSE 422 - UNPROCESSABLE ENTITY
        
        {
        	"error": "Digit line should be numbers only, no spaces or hyphens"
        }
        ```
        <br>
        Requisição com linha digitáveis inválida:
        
        ```json
        RESPONSE 400 - BAD REQUEST
        {
        	"error": "Check digit does not agree with the typewritable line"
        }
        ```