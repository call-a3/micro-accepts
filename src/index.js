import accepts from 'accepts'
import { decorator, Problem } from 'micro-problems/lib/not-acceptable'

export default function serveContentTypes(contentTypes) {
  const supported = Object.keys(contentTypes)
  return decorator(function respondToContentType(req, res) {
    const accept = accepts(req)
    const requested = accept.type(supported)
    if (requested === false || !supported.includes(requested)) {
      throw new Problem(null, { supported, requested: accept.types() })
    }
    return contentTypes[requested](req, res)
  })
}
