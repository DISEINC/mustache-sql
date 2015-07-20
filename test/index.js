import render from '../'
import { expect } from 'chai'

// detailed tests are available at http://bit.ly/1KfMlLK
describe('mustache-sql', () => {
  it('should render number', () => {
    const result = render('SELECT * FROM table WHERE id = {{id}}', { id: 1 })
    expect(result).to.equal('SELECT * FROM table WHERE id = 1')
  })

  it('should render string', () => {
    const result = render('SELECT * FROM table WHERE foo = {{foo}}', { foo: 'bar' })
    expect(result).to.equal("SELECT * FROM table WHERE foo = 'bar'")
  })

  it('should render array', () => {
    const result = render('SELECT * FROM table WHERE foo IN ({{items}})', { items: [1, 2, 3] })
    expect(result).to.equal('SELECT * FROM table WHERE foo IN (1, 2, 3)')
  })

  it('should escapedValue', () => {
    const foo = ';DROP TABLE users'
    const result = render('SELECT * FROM table WHERE foo = {{foo}}', { foo })
    expect(result).to.equal("SELECT * FROM table WHERE foo = ';DROP TABLE users'")
  })

  it('should escapeId', () => {
    const result = render('SELECT * FROM {{{table}}}', { table: 'foobar' })
    expect(result).to.equal('SELECT * FROM `foobar`')
  })
})
