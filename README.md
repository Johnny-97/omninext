# Giovanni Giura

Il progetto include una parte server scritta in python, e una parte realizzata con Angular

## Python

Per il server sono state utilizzate varie tecnologie, tra cui il framework flask per l'agevolazione di api e il framework serverless per integrare i servizi Amazon

Per ottenere risposta dalle api richieste è necessario ottenere l'endpoint delle API da ApiGateway, dopo aver deployato il progetto nella cartella "server" con il proprio account AWS, e inserire l'url ottenuto su una qualsiasi piattaforma API, come postman o insomnia.
Negli header delle chiamate vanno inserite le credenziali del proprio account AWS, specificando AWS Signature come modalità di Autorizzazione. Le api a questo punto dovrebbero rispondere correttamente.

Oltre alle due api richieste, ho realizzato una terza API che consente di ottenere un elenco di tutti gli utenti inseriti.

Le API sono state implementate in modo da sopperire alla limitazione di utilizzare un database nosql come DynamoDB, in modo da restituire solo le informazioni essenziali dell'utente, senza avere nell'oggetto i caratteri 'S' del database. Inoltre i campi "maggiorenne" e "sesso" vengono trattati come due booleani.

Lo stesso vale anche in scrittura, per fare in modo che chi utilizza le API possa semplicemente fornire i dati da inserire nel body, in un comodo formato json

### getUserById
restituisce un messaggio di errore se DynamoDB non risponde con un oggetto in base all'id fornito. Per quanto riguarda l'assenza del parametro id, non sono riuscito a testare quel caso

### createUser
se nel body non viene passato un campo id, esso viene generato automaticamente attraverso un numero randomico compreso tra 1 e 99999999. Non sono riuscito ad implementare un meccanismo di autoincrement ed è quindi un limite di questa applicazione

## Angular

Il progetto è un vecchio esercizio Angular che ho riciclato e riadattato per lo scopo. Prima utilizzava le API di localStorage per effettuare la persistenza dei dati, mentre ora effettua delle chiamate al servizio aws. Purtroppo non sono riuscito a risolvere il problema del CORS, ma ho avuto modo di testare l'applicazione creando un altro piccolo progetto python al solo scopo di imparare il linguaggio e flask, realizzato quindi prima della parte server che sto consegnando. Se vi può interessare testare anche questa parte, vi chiedo di seguire questi passaggi:
 - Risolvere il problema CORS di Api Gateway
 - in omninext\client\src\environments\environment.ts sostituire l'endpoint con quello dell'account di test
 - eventualmente sostituire anche authorization
 - aprire un terminale nella cartella "client", installare le dipendenze con npm i e avviare il progetto con npm start

Dovrebbe essere tutto predisposto per funzionare solo in base a queste configurazioni, altrimenti le api restano testabili attraverso l'utilizzo di postman o insomnia
