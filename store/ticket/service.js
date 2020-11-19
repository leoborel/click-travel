import api from '../../service/api.js'

export default {
  getAllByCode(code) {
    console.log('CODE ---------------', code)
    return new Promise((resolve, reject) => {
      api
        .get('tickets', {
          params: {
            filter: {
              offset: 0,
              limit: 100,
              skip: 0,
              where: {
                to: code,
              },
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
