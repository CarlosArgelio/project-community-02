# Proyecto en proceso

![Esta es una imagen de ejemplo](./assets/working.png)

El presente proyecto esta realizado para abordar diferentes retos en los siguientes ambitos

- Configuracion de un proyecto
- CD/CI en github
- Conectar un backend y un Frontend

a continuacion mostraremos algunas referencias a la documentacion


## Configuracion

Los creadores del repositorio estaran agregando tecnicas de configuracion que haran del desarrollo mucho mas amigable las vamos a ir presentando cada una de ellas

### Alias

Estaremos usando alias de git para hacer el flujo de desarrollo mas efectivo y rapido

para configurarlos debemos ejecutar los siguientes comandos:

```
$ cat .git/config
```

esto abrira una pantalla como la siguiente vista:

```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = git@github.com:CarlosArgelio/project-community-02.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
```

Al final agregaremos lo siguiente para manejar los mismos alias en el proyecto

```
[alias]
	co = checkout
	ci = commit
	st = status
	br = branch
```

Si tienes dudas acerca de los alias visita ==> https://git-scm.com/book/es/v2/Fundamentos-de-Git-Alias-de-Git
