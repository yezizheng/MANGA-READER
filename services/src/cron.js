import axios from "axios";
import "dotenv/config";
import cron from "node-cron";

import "./db/connection";
import Manga from "./db/models/Manga";

<<<<<<< HEAD
=======

>>>>>>> 16280e375596f666c98c700f9faff6a893a208bb
const axiosME = axios.create({
    baseURL: process.env.MANGA_EDEN_URL,
});

const transformMangaEden = manga =>
    manga
        .filter(manga => manga.ld)
        .map(
            ({
<<<<<<< HEAD
                a: alias,
                c: categories,
                h: hits,
                i: _id,
                im: image,
                ld: lastUpdated,
                s: status,
                t: title
            }) => ({
                alias,
=======
                a: alias, 
                c: categories, 
                h: hits, 
                i: _id, 
                im: image, 
                ld: lastUpdated,
                s: status, 
                t: title                                                                                                                               
            }) => ({
                alias, 
>>>>>>> 16280e375596f666c98c700f9faff6a893a208bb
                categories,
                hits,
                _id,
                lastUpdated,
                image,
                status,
                title
            })
        );

const seed = async () => {
<<<<<<< HEAD
    const res = await axiosME.get();
=======
    const res =  await axiosME.get();
>>>>>>> 16280e375596f666c98c700f9faff6a893a208bb
    const mangas = transformMangaEden(res.data.manga);

    await Manga.insertMany(mangas);

    console.log('seeded');
};

seed();

// cron.schedule("0 * * * *", () => {
//     console.log('running a task every hour');
// });

