import LocalStorageService from '../services/localstorage_service'

export default [
  store => {
    // called when the store is initialized
    store.subscribe((mutation, state) => {
      LocalStorageService.save(JSON.stringify(state))
      // called after every mutation.
      // The mutation comes in the format of `{ type, payload }`.
    })
  },
]
