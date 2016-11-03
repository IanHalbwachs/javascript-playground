"use strict";

describe('noop()', function() {
  it('should return undefined', function() {
    expect(noop()).toEqual(undefined);  
  });
});

describe('identity()', function() {
  it('should return whatever value is passed into it', function() {
    const uniqueObject = {};
    expect(identity(1, 2, 3)).toEqual(1);
    expect(identity('string')).toEqual('string');
    expect(identity(false)).toEqual(false);
    expect(identity(uniqueObject)).toEqual(uniqueObject);
  });
});

describe('isOdd()', function() {
  it('should return whether a number is odd', function() {
    expect(isOdd(11)).toEqual(true);
    expect(isOdd(12)).toEqual(false);
  });
});

describe('isEven()', function() {
  it('should return whether a number is even', function() {
    expect(isEven(11)).toEqual(false);
    expect(isEven(12)).toEqual(true);
  });
});

describe('head()', function() {
  it('should be able to pull out the first element of an array', function() {
    expect(head([1,2,3])).toEqual(1);
    expect(head(['a','b','c'])).toEqual('a');
  });
});

describe('last()', function() {
  it('should pull the last element from an array', function() {
    expect(last([1,2,3])).toEqual(3);
    expect(last(['a','b','c'])).toEqual('c');
  });
});

describe('nth()', function() {
  var array = ['a', 'b', 'c', 'd'];
  it('should get the nth element of `array`', function() {
    expect(nth(array, 0)).toEqual('a');
    expect(nth(array, 1)).toEqual('b');
  });
  it('should get the nth element of `array` when negative', function() {
    expect(nth(array, -1)).toEqual('d');
    expect(nth(array, -2)).toEqual('c'); 
    expect(nth(array, -20)).toEqual(undefined); 
  })
})

describe('take()', function() {
  it('should accept an index argument', function() {
    expect(take([1,2,3,4,5], 3)).toEqual([1, 2, 3]);
  });

  it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {
    expect(take([1,2,3], 5)).toEqual([1, 2, 3]);
  });
});

describe('takeRight()', function() {
  it('should accept an index argument', function() {
    expect(takeRight([1,2,3,4,5], 3)).toEqual([3, 4, 5]);
  });

  it('should return all the array\'s elements if the index argument is larger than the length of the array', function() {
    expect(takeRight([1,2,3], 5)).toEqual([1, 2, 3]);
  });
});

describe('initial()', function() {
  it('should take everything except the last item of the array', function() {
    expect(initial([1,2,3])).toEqual([1,2]);
  });
  it('should return an empty array if the input is an empty array', function() {
    expect(initial([])).toEqual([]);
  })
});

describe('tail()', function() {
  it('should take everything except the first item of the array', function() {
    expect(tail([1,2,3])).toEqual([2,3]);
  });
  it('should return an empty array if the input is an empty array', function() {
    expect(tail([])).toEqual([]);
  })
});

describe('sum()', function() {
  it('should return the sum of the numbers of an array', function() {
    expect(sum([1,2,3])).toEqual(6);
    expect(sum([1,2,-3])).toEqual(0);
  });
});

describe('oddSum()', function() {
  it('should return the sum of the numbers of odd values in an array', function() {
    expect(oddSum([1,2,3])).toEqual(4);
    expect(oddSum([1,2,-3])).toEqual(-2);
    expect(oddSum([0,6,4,4])).toEqual(0);
    expect(oddSum([1,2,1,1,1,1])).toEqual(5);
  });
});

describe('max()', function() {
  it('should return the max of the numbers of an array', function() {
    expect(max([1,5,3])).toEqual(5);
    expect(max([10,2,-3])).toEqual(10);
  });
});

describe('min()', function() {
  it('should return the min of the numbers of an array', function() {
    expect(min([1,5,3])).toEqual(1);
    expect(min([10,2,-3])).toEqual(-3);
  });
});

describe('mean()', function() {
  it('should calculate the mean of a list of numbers', function() {
    expect(mean([4, 2, 8, 6])).toEqual(5);
  });
});

describe('fill()', function() {
  it('should use a default `start` of `0` and a default `end` of `length`', function() {
    var array = [1, 2, 3];
    var filled = fill(array, 'a');
    expect(array).toEqual(['a', 'a', 'a']);
    expect(filled).toBe(array);
  });
  it('should work with a positive `start`', function() {
    expect(fill([1, 2, 3], 'a', 1)).toEqual([1, 'a', 'a']);
  });
  it('should work with a positive end', function() {
    expect(fill([1, 2, 3], 'a', 0, 1)).toEqual(['a', 2, 3]);
  })
});

describe('reverse()', function() {
  it('should reverse an array', function() {
    var array = [1,2,3];
    expect(reverse(array)).toEqual([3,2,1]);
  });
  it('should not mutate the original array', function() {
    var array = [1,2,3];
    var reversed = reverse(array);
    expect(reversed).not.toBe(array);
    expect(array).toEqual([1,2,3]);
  });
});
