/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   test-utils.js
//
//   Description
//
//   Started:           Sun May 12 05:46:07 2024
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
//   Notes: 见 ~/javascript/books/Concise/test-containers.js
//
//   Comparing arrays!!
//   https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
//
//////////////////////////////////////////////////////////////////////////////
"use strict";

var perfHooks = require('perf_hooks');
var performance = perfHooks.performance;

function assert(condition, msg) {
    if ( !condition ) {
        throw new Error(msg);
    }
}

function assertRaises(exception, f, msg) {
    let thrown = catchError(f);

    if ( thrown instanceof exception ) {
        return thrown;
    } else {
        throw new Error(msg);
    }
}

function catchError(f) {
    try {
        f();
    } catch (e) {
        return e;
    }

    return null;
}

function arrayEquals(a1, a2) {
    if ( a1.length !== a2.length ) {
        return false;
    } else {
        for (let i = 0; i < a1.length; i++) {
            if ( a1[i] instanceof Array  &&
                 a2[i] instanceof Array ) {
                if ( !arrayEquals(a1[i], a2[i]) ) {
                    return false;
                }
            } else if ( a1[i] !== a2[i] ) {
                return false;
            }
        }

        return true;
    }
}
