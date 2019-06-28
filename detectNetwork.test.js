/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function () {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function () {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function (num) {
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function () {
    var even = function (num) {
      return num % 2 === 0;
    }

    if (even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});


describe('Diner\'s Club', function () {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function () {

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function () {
    if (detectNetwork('39345678901236') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function () {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var expect = chai.expect;


  it('has a prefix of 34 and a length of 15', function () {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function () {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

describe('Visa', function () {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var expect = chai.expect;


  it('has a prefix of 4 and a length of 13', function () {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function () {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function () {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function () {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function () {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function () {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function () {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();

  it('has a prefix of 54 and a length of 16', function () {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function () {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })

});

describe('Discover', function () {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 65 and a length of 16 or 19', function () {
    expect(detectNetwork('6511345678901234')).to.equal('Discover');
    expect(detectNetwork('6511345678901234799')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 16 or 19', function () {
    expect(detectNetwork('6011345678901234')).to.equal('Discover');
    expect(detectNetwork('6011345678901234798')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16 or 19', function () {
    expect(detectNetwork('6441134567890123')).to.equal('Discover');
    expect(detectNetwork('6441345678901234799')).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16 or 19', function () {
    expect(detectNetwork('6451345678901234')).to.equal('Discover');
    expect(detectNetwork('6451345678901234798')).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16 or 19', function () {
    expect(detectNetwork('6461345678901234')).to.equal('Discover');
    expect(detectNetwork('6461345678901234758')).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16 or 19', function () {
    expect(detectNetwork('6471345678901234')).to.equal('Discover');
    expect(detectNetwork('6471345678901234750')).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16 or 19', function () {
    expect(detectNetwork('6481345678901234')).to.equal('Discover');
    expect(detectNetwork('6481345678901238759')).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16 or 19', function () {
    expect(detectNetwork('6491345678901234')).to.equal('Discover');
    expect(detectNetwork('6491345678901238758')).to.equal('Discover');
  });
});


describe('Maestro', function () {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  it('has a prefix of 5018 and a length that ranges between 12 and 19', function () {
    expect(detectNetwork('501834567890')).to.equal('Maestro');
    expect(detectNetwork('5018345678903')).to.equal('Maestro');
    expect(detectNetwork('50183456789078')).to.equal('Maestro');
    expect(detectNetwork('501834567890489')).to.equal('Maestro');
    expect(detectNetwork('5018345678904899')).to.equal('Maestro');
    expect(detectNetwork('50183456789048979')).to.equal('Maestro');
    expect(detectNetwork('501834567890489749')).to.equal('Maestro');
    expect(detectNetwork('5018345678904897498')).to.equal('Maestro');
  });
  it('has a prefix of 5020 and a length that ranges between 12 and 19', function () {
    expect(detectNetwork('502034567890')).to.equal('Maestro');
    expect(detectNetwork('5020345678903')).to.equal('Maestro');
    expect(detectNetwork('50203456789078')).to.equal('Maestro');
    expect(detectNetwork('502034567890489')).to.equal('Maestro');
    expect(detectNetwork('5020345678904899')).to.equal('Maestro');
    expect(detectNetwork('50203456789048979')).to.equal('Maestro');
    expect(detectNetwork('502034567890489749')).to.equal('Maestro');
    expect(detectNetwork('5020345678904897498')).to.equal('Maestro');
  });
  it('has a prefix of 5038 and a length that ranges between 12 and 19', function () {
    expect(detectNetwork('503834567890')).to.equal('Maestro');
    expect(detectNetwork('5038345678903')).to.equal('Maestro');
    expect(detectNetwork('50383456789078')).to.equal('Maestro');
    expect(detectNetwork('503834567890489')).to.equal('Maestro');
    expect(detectNetwork('5038345678904899')).to.equal('Maestro');
    expect(detectNetwork('50383456789048979')).to.equal('Maestro');
    expect(detectNetwork('503834567890489749')).to.equal('Maestro');
    expect(detectNetwork('5038345678904897498')).to.equal('Maestro');
  });
  it('has a prefix of 6304 and a length that ranges between 12 and 19', function () {
    expect(detectNetwork('630434567890')).to.equal('Maestro');
    expect(detectNetwork('6304345678903')).to.equal('Maestro');
    expect(detectNetwork('63043456789078')).to.equal('Maestro');
    expect(detectNetwork('630434567890489')).to.equal('Maestro');
    expect(detectNetwork('6304345678904899')).to.equal('Maestro');
    expect(detectNetwork('63043456789048979')).to.equal('Maestro');
    expect(detectNetwork('630434567890489749')).to.equal('Maestro');
    expect(detectNetwork('6304345678904897498')).to.equal('Maestro');
  });
});


// describe('China Union Pay', function () {
//   var expect = chai.expect;

//   for (var start = 622126; start <= 622925; start += 1) {
//     var num = start.toString() + '1234567890';
//         it('has a prefix of ' + start.toString() + ' and a length of 16', function () {
//           expect(detectNetwork(num)).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + start.toString() + ' and a length of 17', function () {
//           expect(detectNetwork(num + '0')).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + start.toString() + ' and a length of 18', function () {
//           expect(detectNetwork(num + '00')).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + start.toString() + ' and a length of 19', function () {
//           expect(detectNetwork(num + '000')).to.equal('China UnionPay');
//         });
//   }  
//   for (var pre = 624; pre <= 625; pre += 1) {
//     var num_2 = pre.toString() + '1234567890000';
//         it('has a prefix of ' + pre.toString() + ' and a length of 16', function () {
//           expect(detectNetwork(num_2)).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + pre.toString() + ' and a length of 17', function () {
//           expect(detectNetwork(num_2 + '0')).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + pre.toString() + ' and a length of 18', function () {
//           expect(detectNetwork(num_2 + '00')).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + pre.toString() + ' and a length of 19', function () {
//           expect(detectNetwork(num_2 + '000')).to.equal('China UnionPay');
//         });
//   }  
//   for (var prefix = 6282; prefix <= 6288; prefix += 1) {
//     var num_3 = prefix.toString() + '123456789000';
//         it('has a prefix of ' + prefix.toString() + ' and a length of 16', function () {
//           expect(detectNetwork(num_3)).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + prefix.toString() + ' and a length of 17', function () {
//           expect(detectNetwork(num_3 + '0')).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + prefix.toString() + ' and a length of 18', function () {
//           expect(detectNetwork(num_3 + '00')).to.equal('China UnionPay');
//         });
//         it('has a prefix of ' + prefix.toString() + ' and a length of 19', function () {
//           expect(detectNetwork(num_3 + '000')).to.equal('China UnionPay');
//         });
//   }  
//   });


describe('China UnionPay', function () {
  var expect = chai.expect;

  for (var prefix = 622126; prefix <= 622925; prefix += 1) {
    var cardNum = prefix + '1234567890';
    for (var length = 16; length <= 19; length += 1) {
      (function (length, cardNum, prefix) {
        it('has a prefix of ' + prefix + 'and a lengthgth of ' + length, function () {
          expect(detectNetwork(cardNum)).to.equal('China UnionPay');
        });
      })(length, cardNum, prefix)
      cardNum = cardNum + '0';
    }
  }

  for (var prefix = 624; prefix <= 626; prefix += 1) {
    var cardNum = prefix + '1234567890123';
    for (var length = 16; length <= 19; length += 1) {
      (function (length, cardNum, prefix) {
        it('has a prefix of ' + prefix + ' and a lengthgth of ' + length, function () {
          expect(detectNetwork(cardNum)).to.equal('China UnionPay');
        });
      })(length, cardNum, prefix)
      cardNum = cardNum + '0';
    }
  }

  for (var prefix = 6282; prefix <= 6288; prefix += 1) {
    var cardNum = prefix + '123456789012';
    for (var length = 16; length <= 19; length += 1) {
      (function (length, cardNum, prefix) {
        it('has a prefix of ' + prefix + ' and a lengthgth of ' + length, function () {
          expect(detectNetwork(cardNum)).to.equal('China UnionPay');
        });
      })(length, cardNum, prefix)
      cardNum = cardNum + '0';
    }
  }
});




describe('Switch', function () {
  var expect = chai.expect;

  var prefixs = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  for (var i = 0; i < prefixs.length; i += 1) {
    var prefix = prefixs[i].toString();
    var cardNum = prefix;
    for (var j = 0; j < 16 - prefix.length; j += 1) {
      cardNum = cardNum + '0';
    }

    (function (cardNum, prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        expect(detectNetwork(cardNum)).to.equal('Switch');
      });
    })(cardNum, prefixs[i])

    cardNum = cardNum + '00';
    (function (cardNum, prefix) {
      it('has a prefix of ' + prefix + ' and a length of 18', function () {
        expect(detectNetwork(cardNum)).to.equal('Switch');
      });
    })(cardNum, prefixs[i])

    cardNum = cardNum + '0';
    (function (cardNum, prefix) {
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        expect(detectNetwork(cardNum)).to.equal('Switch');
      });
    })(cardNum, prefixs[i])
  }

});
