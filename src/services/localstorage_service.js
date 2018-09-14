const STORAGE_KEY = 'TODO_MVC'
const db = window.localStorage
import initialState from '../store/initial_state'

class LocalStorageService {
  static fetch() {
    return JSON.parse(db.getItem(STORAGE_KEY) || JSON.stringify(initialState))
  }

  static save(data) {
    db.setItem(STORAGE_KEY, data)
  }
}

export default LocalStorageService
