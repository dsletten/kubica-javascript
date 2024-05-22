/// -*- Mode: JavaScript -*-
//////////////////////////////////////////////////////////////////////////////
//
//   ch01.js
//
//   Description
//
//   Started:           Sat May 11 05:06:11 2024
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

//
//     This is a misreading of the pseudocode.
//     Don't need to swap every pair.
//     
function insertionSort(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        for (let j0 = i - 1, j1 = i; j0 >= 0  &&  a[j0] > a[j1]; j0--, j1--) {
            let temp = a[j1];
            a[j1] = a[j0];
            a[j0] = temp;
        }
    }

    return a;
}

function insertionSort(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let current = a[i];
        let j = i - 1;
        for (; j >= 0  &&  a[j] > current; j--) {
            a[j + 1] = a[j];
        }
        a[j + 1] = current;
    }

    return a;
}

//
//     Scope problems!
// 
// function insertionSort(a) {
//     let n = a.length;

//     for (let i = 1; i < n; i++) {
//         let current = a[i];
//         for (let j = i - 1; j > 0; j--) {
//             if ( a[j] > current ) {
//                 a[j + 1] = a[j];
//             } else {
//                 a[j + 1] = current;
//                 break;
//             }
//         }

//         a[j + 1] = current;
//     }

//     return a;
// }

function insertionSort(a) {
    function sortPass(i) {
        let current = a[i];
        let jFinal = i - 1;
        for (let j = i - 1; j >= 0  &&  a[j] > current; j--, jFinal--) {
            a[j + 1] = a[j];
        }

        a[jFinal + 1] = current;
    }
        
    let n = a.length;

    for (let i = 1; i < n; i++) {
        sortPass(i);
    }

    return a;
}

function insertionSort(a) {
    function sortPass(i) {
        let current = a[i];

        function loop(j) {
            if ( j < 0  ||  a[j] <= current ) {
                a[j + 1] = current;
            } else {
                a[j + 1] = a[j];
                loop(j-1);
            }
        }

        loop(i-1);
    }
        
    let n = a.length;

    for (let i = 1; i < n; i++) {
        sortPass(i);
    }

    return a;
}

function insertionSort(a) {
    function sortPass(i) {
        let current = a[i];
        let j = i - 1;

        while ( j >= 0  &&  a[j] > current ) {
            a[j + 1] = a[j];
            j--;
        }

        a[j + 1] = current;
    }
        
    let n = a.length;
    for (let i = 1; i < n; i++) {
        sortPass(i);
    }

    return a;
}

function insertionSort(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let current = a[i];
        let j = i - 1;

        while ( j >= 0  &&  a[j] > current ) {
            a[j + 1] = a[j];
            j--;
        }

        a[j + 1] = current;
    }

    return a;
}

////////////////////////////////////////////////////////////////////////////////////

function insertionSort2(a, test = (x, y) => x < y) {
    let n = a.length;

    for (let i = 1; i < n; i++) {
        let current = a[i];
        let j = i - 1;

        while ( j >= 0  &&  test(current, a[j]) ) {
            a[j + 1] = a[j];
            j--;
        }

        a[j + 1] = current;
    }

    return a;
}
