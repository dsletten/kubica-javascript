/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   test-insertion-sort.js
//
//   Description
//
//   Started:           Sun May 12 05:45:07 2024
//   Modifications:
//
//   Purpose:
//
//   Calling Sequence:
//
//
//   Inputs:
//
//
//   Outputs:
//
//
//   Example:
//
//   Notes:
//
//////////////////////////////////////////////////////////////////////////////
"use strict";

function randomOrderedArray() {
    let low = Math.floor(Math.random() * 200);
    let high = low + Math.floor(Math.random() * 100);
    let a = new Array(high - low);

    for (let i = low, j = 0; i <= high; i++, j++) {
        a[j] = i;
    }

    return a;
}

function shuffle(a) {
    for (let i = a.length-1; i >= 1; i--) {
        let j = Math.floor(Math.random() * (i+1));
        if ( i !== j ) {
            let temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }

    return a;
}

function testInsertionSort() {
    assert(arrayEquals([], insertionSort([])), "Sorting empty array failed.");
    assert(arrayEquals([10], insertionSort([10])), "Sorting single-element array failed.");
    assert(arrayEquals([10, 20], insertionSort([10, 20])), "Sorting ordered two-element array failed.");
    assert(arrayEquals([10, 20], insertionSort([20, 10])), "Sorting reversed two-element array failed.");
    //    This does not ensure stable sort!
    //    JavaScript: 1.0 == 1 => true
    //    insertionSort([3.0, 1, 2, 3, 1.0]) => [ 1, 1, 2, 3, 3 ]
    assert(arrayEquals([1, 1.0, 2, 3.0, 3],
                       insertionSort([3.0, 1, 2, 3, 1.0])), "Stable sort failed.");
    assert(arrayEquals([1, 2, 3, 4, 5],
                       insertionSort([1, 2, 3, 4, 5])), "Sorting ordered array failed.");
    assert(arrayEquals([1, 2, 3, 4, 5],
                       insertionSort([5, 4, 3, 2, 1])), "Sorting reversed ordered array failed.");

    let a = [61, 82, 67, 4, 98, 20, 37, 85];
    assert(arrayEquals([4, 20, 37, 61, 67, 82, 85, 98],
                       insertionSort(a)),
           "Sorting book example failed.");

    for (let i = 0; i < 100; i++) {
        let a = randomOrderedArray();
        let b = shuffle(a.slice(0));

        assert(arrayEquals(a, insertionSort(b)), "Sorting shuffled array failed.");
    }

    return true;
}

function testInsertionSort2() {
    assert(arrayEquals([], insertionSort2([])), "Sorting empty array failed.");
    assert(arrayEquals([10], insertionSort2([10])), "Sorting single-element array failed.");
    assert(arrayEquals([10, 20], insertionSort2([10, 20])), "Sorting ordered two-element array failed.");
    assert(arrayEquals([10, 20], insertionSort2([20, 10])), "Sorting reversed two-element array failed.");
    //    This does not ensure stable sort!
    //    JavaScript: 1.0 == 1 => true
    //    insertionSort2([3.0, 1, 2, 3, 1.0]) => [ 1, 1, 2, 3, 3 ]
    assert(arrayEquals([1, 1.0, 2, 3.0, 3],
                       insertionSort2([3.0, 1, 2, 3, 1.0])), "Stable sort failed.");

    assert(arrayEquals([1, 2, 3, 4, 5],
                       insertionSort2([1, 2, 3, 4, 5])), "Sorting ordered array failed.");
    assert(arrayEquals([1, 2, 3, 4, 5],
                       insertionSort2([5, 4, 3, 2, 1])), "Sorting reversed ordered array failed.");

    assert(arrayEquals([5, 4, 3, 2, 1],
                       insertionSort2([1, 2, 3, 4, 5], (x, y) => x > y)), "Sorting reversed ordered array failed.");
    assert(arrayEquals([5, 4, 3, 2, 1],
                       insertionSort2([5, 4, 3, 2, 1], (x, y) => x > y)), "Sorting ordered array failed.");

    let a = [61, 82, 67, 4, 98, 20, 37, 85];
    assert(arrayEquals([4, 20, 37, 61, 67, 82, 85, 98],
                       insertionSort2(a)),
           "Sorting book example failed.");

    assert(arrayEquals(["pung",  "foo",  "baz",  "bar"],
                       insertionSort2(["pung",  "foo",  "bar",  "baz"], (x, y) => x > y)),
           "Sorting strings in descending order failed.");

    assert(arrayEquals(["Pung",  "FOO",  "BAZ",  "bar"],
                       insertionSort2(["Pung",  "FOO",  "bar",  "BAZ"], (x, y) => x.toLowerCase() > y.toLowerCase())),
           "Case-insensitive sorting strings in descending order failed.");

    assert(arrayEquals(["bar", "baz", "foo", "pung"],
                       insertionSort2(["pung",  "foo",  "bar",  "baz"], (x, y) => x < y)),
           "Sorting strings in ascending order failed.");

    assert(arrayEquals(["BAR", "baz", "Foo", "pUNG"],
                       insertionSort2(["pUNG",  "Foo",  "BAR",  "baz"], (x, y) => x.toLowerCase() < y.toLowerCase())),
           "Case-insensitive sorting strings in ascending order failed.");

    assert(arrayEquals(["foo", "bar", "baz"],
                       insertionSort2(["foo",  "bar",  "baz"], (x, y) => x.length < y.length)),
           "Sorting strings by length should be stable (ascending).");

    assert(arrayEquals(["foo", "bar", "baz"],
                       insertionSort2(["foo",  "bar",  "baz"], (x, y) => x.length > y.length)),
           "Sorting strings by length should be stable (descending).");

    assert(arrayEquals([["z", 2], ["k", 3], ["p", 4], ["a", 5], ["b", 9]],
                       insertionSort2([["a", 5], ["b", 9], ["k", 3], ["p", 4], ["z", 2]],
                                      (a, b) => a[1] < b[1])),
           "Complex sorting criteria are observed.");

    assert(arrayEquals([["a", 5], ["b", 9], ["k", 3], ["p", 4], ["z", 2]],
                       insertionSort2([["b", 9], ["a", 5], ["k", 3], ["p", 4], ["z", 2]],
                                      (a, b) => a[0] < b[0])),
           "Complex sorting criteria are observed.");

    for (let i = 0; i < 100; i++) {
        let a = randomOrderedArray();
        let b = shuffle(a.slice(0));

        assert(arrayEquals(a, insertionSort2(b)), "Sorting shuffled array failed.");
    }

    return true;
}
