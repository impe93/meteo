# Meteo

Quest'applicazione è stata realizzata per un processo di selezione presso una compagnia di Torino.

L'applicazione ha il compito di mostrare il meteo e le previsioni della località in cui si è geolocalizzati.

L'applicazione utilizza le API di Open Weather Map ed utilizza il framework front-end ReactJS.

<img src="./readme-assets/screen-1.png" width="450">

<img src="./readme-assets/screen-2.png" width="450">

## Installazione

### Open Weather setup

Come prima cosa è necessario disporre di un API key di Open Weather, è totalmente gratuita creandosi un account a questo [link](https://home.openweathermap.org/users/sign_in).

Dopo aver clonato il progetto bisogna creare il file `.env.local` nel quale si va a copiare l'API key di Open Weather utilizzando come variabile di ambiente `REACT_APP_OPEN_WEATHER_API_KEY`.

il risultato finale dovrebbe essere simile a questo:
```
REACT_APP_OPEN_WEATHER_API_KEY=<API_KEY>
```

### Installazione delle dipendenze e avvio

Questo progetto utilizza Yarn come gestore di dipendenze. Per installarle basterà lanciare, all'interno della cartella del progetto, il comando:

```
$ yarn install
```

Ed infine per avviare il progetto:

```
$ yarn start
```

## Architettura

### Gestione dello stato

Ho utilizzato [Redux toolkit](https://redux-toolkit.js.org/) per la gestione dello stato, in questo modo sono riuscito a separare la business logic dalle view che la utilizzano. 

### Inversion of Control

Per questa piccola applicazione è sicuramente un po' forzato l'utilizzo di un container IoC. Nei progetti generalmente mi piace utilizzarlo per le dipendenze core, perchè rende la creazione dei test automatici molto più semplice ed allo stesso tempo mi forza ad astrarre quanto piu possibile il servizio che sto andando a creare. In questo caso mi sono servito di [inversify](https://inversify.io/) per la creazione del container IoC.

### Chiamate API

Ho utilizzato [axios](https://github.com/axios/axios) per la gestione delle chiamate API. Lo trovo veloce e semplice da utilizzare.