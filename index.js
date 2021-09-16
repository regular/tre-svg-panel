const SVGEditor = require('tre-svg-editor')
const Accordion = require('tre-editor-accordion')

module.exports = function(ssb, opts) {
  opts = opts || {}

  function source(opts) {
    return ssb.revisions.messagesByType('svg', opts)
  }
  function rename(kvm, newContent, newName) {
    newContent.name = newName
    return newContent
  }

  function isIgnored(kvm) {
    const valid = kvm && kvm.value.content.svg
    if (!valid) return true
    if (opts.isIgnored && opts.isIgnored(kvm)) return true
    return false
  }
  const renderAccordion = Accordion(ssb, source, SVGEditor(ssb, opts), Object.assign({}, opts, {isIgnored, rename}))
  return function render() {
    const el = renderAccordion()
    el.classList.add('tre-svg-panel')
    return el
  }
}
