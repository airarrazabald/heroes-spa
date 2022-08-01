# Héroes SPA

App web donde se pueden visualizar una serie de heroes de marvel y dc . Incluye un buscador por nombre de héroe

## Demo

Si quieres saber como se ve este proyecto desplegado puede revisarlo en el siguiente link:

[heroes-spa](https://airarrazabald.github.io/heroes-spa/#/login)

## Instalación

```yarn
yarn install
```

## Previsualización

![Heroes SPA](preview/heroes-spa.png)

## Despliegue en github

### Para desplegar en github se deben seguir los siguientes pasos':'

* ejecutar el siguiente comando para generar versión para producción

    ```yarn
    yarn build
    ```

* Renombrar la carpeta creada *dist* por *docs*

* Se debe modificar en el archivo *docs/index.html*

    `<script type="module" crossorigin src="/assets/index.57fa7f15.js"></script>`

    Por

    `<script type="module" crossorigin src="./assets/index.57fa7f15.js"></script>`

 * Para visualizar las imagenes se debe copiar la carpeta heroes de la carpeta *assets* del proyecto

 * Pegar la carpeta heroes en la carpeta para despliegue a producción *docs/assets*
 
 * Guardamos los cambios y subimos al repositorio