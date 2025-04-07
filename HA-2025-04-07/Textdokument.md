# Hausaufgaben 07.04.2025 - Datenbanken
# Aufgabe 1: Datenbanksysteme recherchieren

## MySQL
1) SQL oder No-SQL?
    - SQL
2) Wie heißt die benutzte Query-Language?
    - SQL
3) In welchem Format werden die Daten gespeichert?
    - in ibd-Dateien. Mehr sinnvolle Informationen konnte ich nicht finden.
4) Ist die Datenbank lokal hostbar oder nur als Cloud-Service verfügbar?
    - es geht beides.
5) Was ist der typische Anwendungsbereich?
    - Aktuell die weltweit beliebteste Datenbank. Oft eingesetzt für datengestützte B2B-Dienste (Shop, Forum etc.)

## MongoDB
1) SQL oder No-SQL?
    - No SQL
2) Wie heißt die benutzte Query-Language?
    - MongoDB Query Language (MQL)
3) In welchem Format werden die Daten gespeichert?
    - BSON (binäres Format, JSON-basiert)
4) Ist die Datenbank lokal hostbar oder nur als Cloud-Service verfügbar?
    - Beides möglich. (Lokal ist open-source)
5) Was ist der typische Anwendungsbereich?
    - Produktkataloge mit variabler Struktur
    - Chat-Apps
    - überall dort, wo strukturierte und unstrukturierte Daten zeitgleich verabrietet werden sollen

## Redis
1) SQL oder No-SQL?
    - NoSQL
2) Wie heißt die benutzte Query-Language?
    - Redis Command Language
3) In welchem Format werden die Daten gespeichert?
    - Daten werden im RAM gespeichert
4) Ist die Datenbank lokal hostbar oder nur als Cloud-Service verfügbar?
    - lokal hostbar
5) Was ist der typische Anwendungsbereich?
    - Überall dort, wo es auf sehr schnelle Datenverarbeitung ankommt.
    (Chat-Apps, Echtzeit-Spielanalysen, Spiele)

## DynamoDB

1) SQL oder No-SQL?
    - NoSQL
2) Wie heißt die benutzte Query-Language?
    - DynamoDB Query Language
3) In welchem Format werden die Daten gespeichert?
    - Key-Value-Pairs in Textdokumenten
4) Ist die Datenbank lokal hostbar oder nur als Cloud-Service verfügbar?
    - Nur als Cloud, weil von AWS
5) Was ist der typische Anwendungsbereich?
    - E-Commerce-PLattformen
    - Mobile Apps, die schnell Echtzeitdaten benötigen
    - Gaming und/oder Turniere (Ranglisten und Spielergebnisse)

## Aurora
1) SQL oder No-SQL?
    - SQL
2) Wie heißt die benutzte Query-Language?
    - MySQL
3) In welchem Format werden die Daten gespeichert?
    - Tabellen
    - MySQL-Format
4) Ist die Datenbank lokal hostbar oder nur als Cloud-Service verfügbar?
    - Nur Cloud-Service
5) Was ist der typische Anwendungsbereich?
    - Unternehmensanwendungen (WWS oder Finanzsysteme)
    - Web- und Mobile-Apps

# Aufgabe 2: SQL-Übungen
Führt folgende Querys auf https://www.programiz.com/sql/online-compiler aus. 
Gebt eure Query in der Abgabe als Text an!

Gebt zunächst den gesamten Inhalt der Tabelle "Orders" aus.
- SELECT *
- FROM orders;

Gebt aus mithilfe derselben Tabelle aus, welche Items der Kunde mit customer_id 4 gekauft hat.
- SELECT order_id, item, amount
- FROM orders
- WHERE customer_id = "4"

Gebt aus der Tabelle "Shippings" die customer aus, die noch auf ihre bestellungen warten (Status Pending)
- SELECT customer
- FROM Shippings
- WHERE status = "Pending";

Gebt aus der Tabelle "Customers" alle Namen aus, von Kunden die in den USA wohnen und älter als 25 sind.
- SELECT customer_id, first_name,
- last_name, age
- FROM Customers
- WHERE country = "USA" AND age >= 25;