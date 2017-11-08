'use strict'

import app from './paperapp'
import * as stores from './stores'
import * as views from './views'

app({
  stores,
  views,
  init (state, actions) {
    actions.Overlay.init()
    actions.Router.init()
  }
})
