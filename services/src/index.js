import "dotenv/config";

import "./db/connection";
import "./server";  

import Manga from "./db/models/Manga";

const manga = new Manga({
    "_id" : "5db37427719a168daca60ff5",
    "alias" : "haunted",
    "categories" : [],
    "hits" : 0,
    "image" : null,
    "status" : 1,
    "title" : "HAUNTED (ホーンテッド)"
});

manga.save(function (err, manga) {
    if (err) return console.error(err);
    console.log("saved");
})