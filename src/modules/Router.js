
import { encode, decode } from '@whaaaley/query-string'

const Router = {
  state: {},
  actions: {
    init: s => {
      const { hash } = window.location
      const index = hash.indexOf('?')
      return {
        query: decode(hash.slice(index)),
        path: hash.slice(1, index === -1 ? hash.length : index)
      }
    },
    route: state => data => {
      window.location.hash = (data.path || state.path) + encode(data.query || state.query)
    }
  }
}

export { Router }
