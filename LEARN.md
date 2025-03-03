# REST API

Ebben a projektben egy REST API induló kit van, amely az alábbi technológiákat használja:
- Node.js
- Express (web framework)
- Prisma (ORM)
- Zod (Validátor)
- TypeScript

## Projekt struktúra

A projekt a következő mappastruktúrára épül:

```
src/
├── controllers/
├── database/
├── middlewares/
├── models/
├── routes/
├── utils/
```

- `controllers/`: Az egyes végpontokhoz tartozó controller fájlok
- `database/`: Az adatbázis kapcsolatot és modelleket kezelő fájlok
- `middlewares/`: Az egyes végpontokhoz tartozó middleware fájlok
- `models/`: Az adatbázis modellek
- `routes/`: Az egyes végpontokat definiáló fájlok
- `utils/`: Segédfüggvények

## Express

Az Express egy Node.js web framework, amely segítségével könnyedén tudunk REST API-t készíteni. Az Express egy middleware alapú framework, amely lehetővé teszi, hogy a különböző HTTP kéréseket különböző middleware-ekkel kezeljük.

## Prisma

A Prisma egy modern ORM (Object-Relational Mapping) eszköz, amely lehetővé teszi, hogy az adatbázis műveleteket TypeScript segítségével végezzük el. A Prisma segítségével könnyedén tudunk adatbázis modelleket definiálni, és azokon műveleteket végezni.

## Zod

A Zod egy validációs könyvtár, amely lehetővé teszi, hogy validáljuk a beérkező adatokat a különböző végpontokon. A Zod segítségével egyszerűen tudunk validációs sémákat definiálni, és azokat használni a beérkező adatok ellenőrzésére.


## HTTP request

A HTTP kérés elküldése után az alábbi folyamat zajlik le:
- A kérés beérkezik a szerverre
- A szerver megkapja a kérést, és továbbítja a megfelelő végpont felé
- A végpont kezeli a kérést, és választ küld vissza a kliensnek
- A kliens megkapja a választ, és feldolgozza azt

### GET request

A GET kérés egy adott erőforrást kér le a szerverről. A GET kérés nem módosítja az adatbázist, csak lekérdezi az adatokat.

Példa:

```http
GET /api/users
```

### POST request

A POST kérés egy új erőforrást hoz létre a szerveren. A POST kérés általában egy JSON objektumot küld a szervernek, amely tartalmazza az új erőforrás adatait.

Példa:

```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@doe.com"
}
```

### PUT request

A PUT kérés egy meglévő erőforrás módosítására szolgál. A PUT kérés egy JSON objektumot küld a szervernek, amely tartalmazza a módosított adatokat.

Példa:

```http
PUT /api/users/1
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "john@doe.com"
}
```

### DELETE request

A DELETE kérés egy meglévő erőforrás törlésére szolgál.

Példa:

```http
DELETE /api/users/1
```
