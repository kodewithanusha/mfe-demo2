# Remote

```
ng new remoteapp --create-application="false"
ng generate application admin-view
ng add @angular-architects/module-federation --project admin-view --type remote --port 4201

ng generate application recon
ng add @angular-architects/module-federation --project recon --type remote --port 4202
```

# Host

```
ng new hostapp
ng add @angular-architects/module-federation --type host --port 4200
```
