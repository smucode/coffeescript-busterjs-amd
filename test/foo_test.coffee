define ['cs!../src/foo'], (Foo) ->
  buster.testCase 'Foo',
    'injects greeting to the body': ->
      new Foo()
      body = document.getElementsByTagName('body')[0]
      assert.equals body.innerHTML, 'Hello World'