define [], () ->
  class Foo
    constructor: ->
      body = document.getElementsByTagName('body')[0]
      body.innerHTML = 'Hello World'