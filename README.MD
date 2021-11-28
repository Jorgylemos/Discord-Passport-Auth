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