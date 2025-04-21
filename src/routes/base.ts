import { Router } from "express"
import { albumsStore } from "../store"
import path from "path";

export const baseRouter = Router()

baseRouter.get("/", (request, response) => {
    response.redirect("./login")
});

baseRouter.get('/albums/:albumID', (request, response) => {
    const filePath = path.join(import.meta.dirname, '../public', 'albums.html') //сделать
    response.sendFile(filePath) //сделать
    // response.redirect('/albums_details')
})

baseRouter.get('/releases/:albumID', (request, response) => {
    const albumID = request.params.albumID
    response.redirect(`/albums/${albumID}`) // сделать перенаправление в /albums/:albumID
})


baseRouter.get("/docs", (_, response) => {
    response.redirect(301, "https://developer.mozilla.org/en-US/")
});

