import { Router } from "express"
import { albumsStore } from "../store"

export const apiRouter = Router()

apiRouter.get('/albums', (request, response) => {
    const genreFilter = request.query.genre // http://localhost:3000/albums?genre=rock
    const typeFilter = request.query.type // http://localhost:3000/albums?type=vinyl
    console.log(genreFilter, typeFilter) // общее > http://localhost:3000/albums?genre=rock&type=vinyl

    let filtered = albumsStore

    if (genreFilter) {
        filtered = filtered.filter(album => album.genre === genreFilter)
    }

    if (typeFilter) {
        filtered = filtered.filter(album => album.type === typeFilter)
    }

    response.json(filtered)
})

apiRouter.post('/albums', (request, response) => {
    albumsStore.push(request.body)
    response.redirect('/albums.html')
})
