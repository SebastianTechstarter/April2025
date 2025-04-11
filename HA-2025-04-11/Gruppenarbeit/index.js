const express = require("express")
const app = express()
const sqlite3 = require("sqlite3")

const db = new sqlite3.Database(":memory:")

db.serialize(() => {
   db.run( `CREATE TABLE tiere (
    id INTEGER PRIMARY KEY,
    tierart VARCHAR(50),
    name VARCHAR(50),
    krankheit VARCHAR(100),
    age INT,
    gewicht REAL);`)
    db.run(`INSERT INTO tiere(tierart,name,krankheit,age,gewicht) VALUES ("Hund","Bello","husten",5,12.4)`)

    selectAllTiereQuery = `SELECT * FROM tiere`
    db.all(selectAllTiereQuery, (err,rows) => {
        if(err){
            console.log(err)
        }else {
            console.log(rows)
        }
    })
    process.on("exit", () => {
        db.close()
    })
});

// GET /
app.get("/", (req,res) => {
    res.send("Die API funktioniert!")
})

// GET /tiere
app.get("/tiere", (req,res) => {
    db.all(selectAllTiereQuery, (err,rows) => {
        if(err){
            res.status(404).send("Fehler in deiner Query-Anfrage")
        }else {
            res.json(rows)
        }
    })
})

// POST /tiere
app.use(express.json()) // Ermöglicht, Express JSON aus dem Body auszulesen
app.post("/tiere", (req,res) => {
    const {tierart, name, krankheit, age, gewicht} = req.body

    db.run(`INSERT INTO tiere (tierart,name,krankheit,age,gewicht) VALUES(?,?,?,?,?)`,[tierart,name,krankheit,age,gewicht])
    res.status(201).send("Tier wurde erfolgreich hinzugefügt")
})

// GET /tiere/:id
app.get("/tiere/:id", (req, res) => {
    const id=req.params.id
    db.get(`SELECT * FROM tiere WHERE id =?`, [id], (err,row) => {
        if (err) {
            res.status(500).send("Fehler bei der Abfrage")
        } else if (!row) {
            res.status(404).send("Tier nicht gefunden")
        } else {
            res.json(row)
        }
    })
})

// PUT /tiere/:id
app.purge("/tiere/:id", (req, res) => {
    const id= req.params.id
    const {tierart, name, krankheit, age, gewicht} = req.body

    const query = `
    UPDATE tiere SET
      tierart = ?,
      name = ?,
      krankheit = ?,
      age = ?,
      gewicht = ?
    WHERE id = ?
  `

  db.run(query, [tierart, name, krankheit, age, gewicht, id], function (err) {
    if (err) {
        res.status(500).send("Fehler beim Ändern des Tiers")
    } else if (this.changes === 0) {
        res.status(404).send("Nichts gefunden")
    } else {
        res.send("Tier wurde erfolgreich geändert!")
    }
  })
})

// DELETE /tiere/:id
app.delete("/tiere/:id", (req, res) => {
    const id= req.params.id
    db.run(`DELETE FROM tiere WHERE id=?`, [id], function (err) {
        if (err) {
            res.status(500).send("Fehler beim Löschen des Tiers")
        } else if (this.changes === 0) {
            res.status(404).send("Nichts gefunden")
        } else {
            res.send("Tier wurde erfolgreich gelöscht")
        }
    })
})

app.listen(3000, () => {
    console.log("Server läuft auf Port 3000...")
  })




