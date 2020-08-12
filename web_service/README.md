# Gala projekts - sprieguma dalītāja web-service
Darba autors - Daniils Surmačs, REBM01

## Nepieciešama programmatūra:
1. Node.js un Express framework, lai palaist manu projektu;
2. npm , lai uzinstalēt nepieciešamus moduļus;
3. ngspice, lai simulēt sprieguma dalītāja shēmu;
4. ejs programma, lai dot iespēju Node.js strādāt ar .ejs formāta failiem;
5. body-parser modulis, lai noņemt datus no HTML formas.

## Instalēšana:

Lai sākt strādāt ar manu tīmekļa pakalpojumu, vispirms jāuzinstalē niepieciešamu programmatūru.
Lai sākt instalēšanu, dodieties uz lejupielādētu direktoriju ar maniem failiem un instalējiet sekojošas programmas: 
1. Node.js;
2. npm;
3. ngspice.

Pēc tam, lai lejupielādēt Express framework, ievadiet sekojošu komandu komandrindā:

	npm install express --save


Pēc tam, lai lejupielādēt ejs programmu un body-parser moduli, ievadiet sekojošas komandas komandrindā:

	npm install ejs
	npm install body-parser

Pēc tam, lai palaist manu tīmekļa pakalpojumu, lūdzu, ievadiet sekojošu komandu komandrindā:

	node index.js

## Lietotāja rokasgrāmata:

Pēc tīmekļa pakalpojumu palaišanas, ejiet ar pārlūkprogrammu uz *localhost:3000*.
Jūs redzēsiet galvenu lapu:

### 

Galvenā lapā ievādiet atbilstošu elementu nominālus un nospiediet pogu "Simulēt", lai nosimulēt
ķēdi ar ievādītiem elementu nomināliem. Pēc pogas nospiešanas, ievādītie dati ir nodoti uz ngspice aprēķinām.
Pēc tam, jūs tiksiet novirzīts uz lapu ar simulācijas rezultātiem:

###

Lai atgriezties atpakaļ, nospiediet pogu "Atpakaļ".

