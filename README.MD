Crie um arquivo .env e coloque as seguintes informações:
```env
PORT = 3000
CLIENT_ID= Coloque o client id do seu bot do discord aqui.
CLIENT_SECRET= Coloque o client secret do seu bot do discord aqui.
CLIENT_REDIRECT=/auth/redirect - Adicione ao redirect na sua aplicação discord.
CLIENT_MONGO= Coloque o Link de conexão do seu mongodb aqui.
```

Instale as dependências:

```
npm i dotenv ejs express express-session mongoose nodemon passport passport-discord
```

Para nodemon:

```
sudo npm i nodemon -g
```

Inserir em package.json:


```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon ./src/bot.js",
    "start": "node ./src/bot.js"
  }
```

Para rodar logo após, utilize:
```
npm run dev
```
