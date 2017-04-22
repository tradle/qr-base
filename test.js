
const test = require('tape')
const enc = require('./')
const hex = [
  '5623ab6d6518b00065fb9d133fc34ebb6141015de72a5c39946058e0fbd35550',
  '01623fc16b2b76ac7d102fa2edcb07c351f1acccc597f3c7d27e118440510426'
]

test('encode/decode', function (t) {
  const expected = {
    schema: 'ImportData',
    data: {
      provider: hex[0],
      dataHash: hex[1],
      host: 'https://blah.blah'
    }
  }

  const prebufferized = {
    schema: 'ImportData',
    data: {
      provider: new Buffer(hex[0], 'hex'),
      dataHash: new Buffer(hex[1], 'hex'),
      host: 'https://blah.blah'
    }
  }

  t.same(enc.fromHex(enc.toHex(expected)), expected)
  t.same(enc.fromHex(enc.toHex(prebufferized)), expected)
  t.end()
})
