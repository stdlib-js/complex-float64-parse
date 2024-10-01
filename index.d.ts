/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

// MODULES //

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@esm/index.d.ts"/>

import { Complex128 } from '@stdlib/types/complex';


/**
* Parse a string representation of a 128-bit complex number.
*
* @param str - string representation of a complex number
* @throws must provide a string recognized as a complex number
* @returns Complex128 instance
*
* @example
* var str = '5 + 3i';
*
* var z = parseComplex128( str );
* // returns <Complex128>
*/
declare function parseComplex128( str: string ): Complex128;


// EXPORTS //

export = parseComplex128;