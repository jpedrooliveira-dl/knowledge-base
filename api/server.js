const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
require('dotenv').config()

const app = express()
const PORT = 3000

// app.arguments(cors())
app.use(cors())

const db = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD_DB,
  database: 'knowledge_base'
})

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados', err)
    return
  }
  console.log('Conectado ao banco de dados mysql com sucesso!')
})

app.get('/tecnologia', (req, res) => {
    db.query('select * from tecnologia', (err, results) => {
      if (err) {
        console.error('Erro ao busca tecnologia:', err)
        return res.status(500).json({ error: 'Erro no servidor '})
      }
      res.json(results)
    })
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
