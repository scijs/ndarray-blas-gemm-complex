# ndarray-blas-gemm-complex

[![Build Status](https://travis-ci.org/scijs/ndarray-blas-gemm-complex.svg?branch=master)](https://travis-ci.org/scijs/ndarray-blas-gemm-complex) [![npm version](https://badge.fury.io/js/ndarray-blas-gemm-complex.svg)](http://badge.fury.io/js/ndarray-blas-gemm-complex)

BLAS-like Level 3 Complex GEMM (matrix-matrix multiplication) for [ndarrays](https://github.com/scijs/ndarray)

**Note**: *This module is definitely not optimized. It should be considered production ready for small problems in the sense that accuracy is just fine, but no attempt has been made to optimize.*

## Usage

##### `gemm( A_r, A_i, B_r, B_i, C_r, C_i )`
Compute `C <- A * B` for the 2D ndarrays A, B, and C. Dimensions of A, B, and C must be compatible according to the normal matrix multiplication rules.

## Credits
(c) 2015 Ricky Reusser. MIT License

