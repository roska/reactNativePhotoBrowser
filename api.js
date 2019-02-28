const api = {

  getPhotos: async () => {
    console.log('api getPhotos called')
    try {
      let res = await fetch('http://jsonplaceholder.typicode.com/photos')
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    } catch(error) {
      console.log(error)
    }
  },

  getPhotoById: async id => {
    console.log('w00000000t')
    try {
      let res = await fetch(`http://jsonplaceholder.typicode.com/photos/${id}`)
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    } catch(error) {
      console.log(error)
    }
  },

  getPhotosPage: async (page, size) => {
    console.log('api get photo page', page, size)
    try {
      let res = await fetch(`http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${size}`)
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    } catch(error) {
      console.log(error)
    }
  },
}

export default api
