<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isUnityProbabilityArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is an array of probabilities that sum to one.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-unity-probability-array
```

</section>

<section class="usage">

## Usage

```javascript
var isUnityProbabilityArray = require( '@stdlib/assert-is-unity-probability-array' );
```

#### isUnityProbabilityArray( value )

Tests if a `value` is an array of probabilities that sum to one.

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );

var bool = isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
// returns true

bool = isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
// returns true

bool = isUnityProbabilityArray( [ 3.14, 0.0 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Summation of finite-precision floating-point numbers often has numerical error. For example,

    ```javascript
    var arr = [ 0.1, 0.2, 0.1, 0.1, 0.2, 0.2, 0.1 ]; // => 1.0
    var sum = 0.0;
    var i;
    for ( i = 0; i < arr.length; i++ ) {
        sum += arr[ i ];
    }
    console.log( sum );
    // => 0.9999999999999999
    ```

    To account for numerical error, the function tests if array elements sum to approximately one; specifically,

    ```text
    1.0 - sqrt(eps) <= sum(A) <= 1.0 + sqrt(eps)
    ```

    where `eps` is [double-precision floating-point][ieee754] epsilon (`~2.22e-16`) and `sqrt(eps) ~ 1.49e-8`. The above comparison ensures equality for approximately half the significand bits.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Uint8Array = require( '@stdlib/array-uint8' );
var isUnityProbabilityArray = require( '@stdlib/assert-is-unity-probability-array' );

var arr = [ 0.0, 1.0 ];
var bool = isUnityProbabilityArray( arr );
// returns true

arr = [ 0.5, 0.25, 0.25 ];
bool = isUnityProbabilityArray( arr );
// returns true

arr = new Uint8Array( [ 0, 0, 1, 0 ] );
bool = isUnityProbabilityArray( arr );
// returns true

arr = [ 0.4, 0.4, 0.4 ];
bool = isUnityProbabilityArray( arr );
// returns false

arr = [ 3.14, -1.0 ];
bool = isUnityProbabilityArray( arr );
// returns false

bool = isUnityProbabilityArray( [] );
// returns false

bool = isUnityProbabilityArray( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-probability`][@stdlib/assert/is-probability]</span><span class="delimiter">: </span><span class="description">test if a value is a probability.</span>
-   <span class="package-name">[`@stdlib/assert/is-probability-array`][@stdlib/assert/is-probability-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array-like object containing only probabilities.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-unity-probability-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-unity-probability-array

[test-image]: https://github.com/stdlib-js/assert-is-unity-probability-array/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-unity-probability-array/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-unity-probability-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-unity-probability-array?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-unity-probability-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-unity-probability-array/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-unity-probability-array/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_floating_point

<!-- <related-links> -->

[@stdlib/assert/is-probability]: https://github.com/stdlib-js/assert-is-probability

[@stdlib/assert/is-probability-array]: https://github.com/stdlib-js/assert-is-probability-array

<!-- </related-links> -->

</section>

<!-- /.links -->
