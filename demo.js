const {client} = require('tre-client')
const SVGPanel = require('.')
const h = require('mutant/html-element')
const setStyle = require('module-styles')('tre-svgpanel-demo')

setStyle(`
  .tre-svgpanel-demo {
    width: 20%;
  }
`)

client( (err, ssb, config) => {
  if (err) return console.error(err)

  const renderPanel = SVGPanel(ssb, {
    //ace_theme: 'ace/theme/twilight'
  })

  document.body.appendChild(h('.tre-svgpanel-demo', [
    renderPanel()
  ]))
})

