import { Writer } from 'mustache'
import { escape, escapeId } from 'mysql/lib/protocol/SqlString'

class Engine extends Writer {
  unescapedValue (token, context) {
    const value = context.lookup(token[1])
    if (value || value === 0) {
      return escapeId(value)
    }
  }

  escapedValue (token, context) {
    const value = context.lookup(token[1])
    if (value || value === 0) {
      return escape(value)
    }
  }
}

const defaultEngine = new Engine()
export default defaultEngine.render.bind(defaultEngine)
