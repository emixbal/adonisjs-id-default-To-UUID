'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CollegeSchema extends Schema {
  up () {
    this.create('colleges', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('colleges')
  }
}

module.exports = CollegeSchema
