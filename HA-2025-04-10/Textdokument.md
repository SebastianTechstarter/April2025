# Tabelle Fakultät erstellen
CREATE TABLE fakultaet (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR (80)
);

# Tabelle befüllen
INSERT INTO fakultaet (name)
VALUES ("Informatik"), ("Biologie"), ("Physik"), ("Sport"), ("Geologoie");

# Tabelle mit Professoren erstellen
CREATE TABLE professor (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR (80),
fakultaet_id INTEGER 
);

# Tabelle befüllen
INSERT into Professor (name, fakultaet_id) VALUES ("Dr. Fischer", 2);
INSERT into Professor (name, fakultaet_id) VALUES ("Hr. Meier", 1);
INSERT into Professor (name, fakultaet_id) VALUES ("Dr. König", 3);

# Tabelle Studenten
CREATE TABLE Student (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50),
  geschlecht VARCHAR(1),
  prof_id INTEGER);

# Tabelle befüllen
INSERT INTO student (name, geschlecht, professor_id) VALUES
('Lisa', 'w', 1),
('Tom', 'm', 1),
('Sophie', 'w', 2),
('Lukas', 'm', 3);

# Tabelle Projekte erstellen
CREATE TABLE projekt (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titel VARCHAR (80),
  prof_id INTEGER,
  student_id INTEGER
);

# Tabelle befüllen
INSERT INTO projekt (titel, student_id) VALUES
('KI in der Medizin', 3, 1),
('Robotik', 3, 1),
('Cloud Computing', 2, 2),
('Mikrobiologie', 1, 4);

# Abfrage 1 JOIN:
## Alle Studenten mit ihrer Fakultät anzeigen
SELECT student.name, fakultaet.name AS fakultaet
FROM student
JOIN professor ON student.prof_id = professor.id
JOIN fakultaet ON professor.fakultaet_id = fakultaet.id;

# Abfrage 2 WHERE:
## Alle weiblichen Studenten anzeigen
SELECT name, geschlecht FROM student
WHERE geschlecht = "w";

# Abfrage 3 COUNT:
## Die Anzahl der Fakultäten zählen
SELECT COUNT (*) AS Anzahl_Fakultaeten
FROM fakultaet; 

3. Wie viele Projekte gibt es pro Fakultät?
4. Wie viele Studierende betreut jeder Professor?
Dustin Pötzsch
15:00
SELECT geschlecht, COUNT(*) AS anzahl
FROM Student
GROUP BY geschlecht;
Marcus Vix
15:00
2. Alle Projekttitel, die von weiblichen Studierenden durchgeführt werden
Dustin Pötzsch
15:22
SELECT fakultaet.name AS fakultaet_name, COUNT(projekt.id) AS projektanzahl
FROM projekt
INNER JOIN Student ON projekt.student_id = Student.id
INNER JOIN Professor ON Student.professor_id = Professor.id
INNER JOIN fakultaet ON Professor.fakultaet_id = fakultaet.id
GROUP BY fakultaet.name;
Marcus Vix
17:22
SELECT professor.name, COUNT(student.id) AS anzahl_studis
FROM professor
JOIN student ON professor.id = student.professor_id

GROUP BY professor.name;
Zeige alle Studierenden der Fakultät "Informatik", die an mehr als einem Projekt beteiligt sind.