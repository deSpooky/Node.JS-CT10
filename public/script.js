async function getAlbums() {
    const response = await fetch('/albums', {
        headers: {
            "Content-Type": 'application/json'
        }
    })

    if (!response.ok) {
        throw new Error('data failed')
    }

    return await response.json()
}

function renderAlbums(albumsData) {
    
    const albumsElement = document.querySelector('.album-list')

    for (const album of albumsData) {
        const albumElement = document.createElement('li')
        albumElement.textContent = album.title
        albumsElement.appendChild(albumElement)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const albums = await getAlbums()
        renderAlbums(albums)
    } catch (error) {
        console.error(error)
    }
})