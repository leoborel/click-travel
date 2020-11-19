import api from '../../service/api.js'

export default {
  getAll() {
    return new Promise((resolve, reject) => {
      api
        .get('destinations', {
          params: { offset: '', limit: 100, skip: 0, where: {} },
        })
        .then((response) => {
          resolve(response.data)
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    })
  },
  getAllDream() {
    return new Promise((resolve, reject) => {
      api
        .get('destinations', {
          params: {
            filter: {
              offset: 0,
              limit: 100,
              skip: 0,
              where: { isDreamDestination: true },
            },
          },
        })
        .then((response) => {
          resolve(response.data)
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    })
  },
}
