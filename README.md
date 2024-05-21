# Run Mongodb docker container

```bash
docker run -p 27017:27017 --name <CONTAINER_NAME> -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root  -v <LOCAL-PATH> -d mongo
```
<b> <CONTAINER_NAME> ==> Please replace this with your container name.</b>

<b> <YOUR_LOCAL_PATH> ==> please replace this line to your local path where you want to mount postgres data.</b>
  
# Installation
  
```bash
  npm install  
```
  
## Running the app

```bash
# run in watch mode
$ npm run start:dev
```

## For Seeding
```bash
$ npm run seed:db
```


## Node Version
```bash
18.17.0
```

## Npm Verions
```bash
9.6.7
```