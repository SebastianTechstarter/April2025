# Aufgabe 1 - Tabellen löschen (10P)
Lösche alle Tabellen auf der programiz.com-Website
- drop table [shippings]
- drop table[orders]
- drop table [customers]

# Aufgabe 2 - Neue Tabellen anlegen (20P)
Erstelle 2 neue Tabellen: 
studenten (student_id, name, hauptfach)
- CREATE TABLE [Studenten] (
    student_id INTEGER PRIMARY KEY,
    name, 
    hauptfach);
kurse (kurs_id, titel, dozent)
- CREATE TABLE [Kurse] (
    kurs_id INTEGER PRIMARY KEY,
    titel,
    dozent);
-> Hierbei sind die entsprechenden Spaltennamen in den Klammern zu sehen. Fett gedruckt bedeutet, diese Spalte ist ein Primärschlüssel.

# Aufgabe 3 - Tabellen befüllen (20P)
Legt sechs Studenten und mind. drei Kurse an.
- Studenten
    - INSERT INTO [Studenten] (student_id, name, hauptfach)
      VALUES (1, "Primus", "JavaScript for Dummies")
      VALUES (2, "Secundus", "JavaScript for Dummies")
      VALUES (3, "Tertius", "JavaScript for Dummies")
      VALUES (4, "Quartus", "JavaScript for Dummies")
      VALUES (5, "Quintus", "JavaScript for Dummies")
      VALUES (6, "Stefan", "JavaScript for Dummies")
- Kurse
    - INSERT INTO [Kurse] (kurs_id, titel, dozent)
      VALUES (1, "Boolsche Algebra", "Lukas")
      VALUES (2, "JavaScript for Dummies", "Suheib")
      VALUES (3, "UndercoverBoss", "Mete");

# Aufgabe 4 - Foreign Keys (50P)
Erstellt nun eine letzte Tabelle: 
belegungen (belegung_id, student_id, kurs_id, datum)
Diese Tabelle soll nun, wie ihr euch wahrscheinlich denken könnt, eine Relation zwischen den Studenten und ihren belegten Kursen erstellen. Die fett gedruckte Eigenschaft ist wieder der Primary Key, die unterstrichenen Eigenschaften sind foreign keys. 
    - CREATE TABLE [Belegungen] (
        belegung_id INTEGER PRIMARY KEY,
        student_id INTEGER,
        kurs_id INTEGER,
        FOREIGN KEY (student_id) REFERENCES Studenten(student_id) ON DELETE CASCADE 
        FOREIGN KEY (kurs_id) REFERENCES Kurse(kurs_id) ON DELETE CASCADE
    );

-> Schreibt ein paar Einträge in die Tabelle Belegungen.
    - INSERT INTO Belegungen (belegung_id, student_id, kurs_id)
      VALUES (1, 1, 2);
    - INSERT INTO Belegungen (belegung_id, student_id, kurs_id)
      VALUES (2, 6, 3);

# Aufgabe 5 - JOIN (Optional, aber sehr empfohlen)
Jetzt wirds erst richtig spannend. Der JOIN operator verbindet zwei Tabellen, um sie wie eine lange zeile betrachten zu können. 
Informiere dich noch mehr zu JOINS: https://www.w3schools.com/sql/sql_join_inner.asp
(In SQLite ist JOIN gleichzusetzen mit INNER JOIN)

Schreibt dann Querys für folgende Fragestellungen: 
Wie heißen die Kurse in die <student xy> belegt hat?
Wie heißen die Studenten, die in <kurs yz> belegt haben?

-> Ihr müsst natürlich die von euch gewählten Namen benutzen :) 
- SELECT Kurse.titel
  FROM Belegungen
  INNER JOIN Studenten ON Belegungen.student_id = Studenten.student_id
  INNER JOIN Kurse ON Belegungen.kurs_id = Kurse.kurs_id
  WHERE Studenten.name = "Tertius";

- SELECT Studenten.name
  FROM Belegungen
  INNER JOIN Studenten ON Belegungen.student_id = Studenten.student_id
  INNER JOIN Kurse ON Belegungen.kurs_id = Kurse.kurs_id
  WHERE Kurse.titel = "JavaScript for Dummies";