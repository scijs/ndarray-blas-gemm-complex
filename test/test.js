'use strict';

var assert = require('assert'),
    ndarray = require('ndarray'),
    gemm = require('../'),
    ndt = require('ndarray-tests'),
    pool = require('ndarray-scratch')

describe("cgemm",function() {

  var Ar, Ai, Br, Bi, Cr, Ci, CrExp, CiExp

  beforeEach(function() {
    Ar = ndarray([1,3,5,7,9,11],[3,2])
    Ai = ndarray([2,-4,6,-8,10,-12],[3,2])

    Br = ndarray([1,3,5,7,9,11],[2,3])
    Bi = ndarray([-2,4,-6,8,-10,12],[2,3])

    Cr = pool.zeros([3,3])
    Ci = pool.zeros([3,3])
  })


  it('Calculates A*B ([3x2] x [2x3])',function() {
    CrExp = ndarray([58, -18, 98, 130,  -26, 234, 202,  -34, 370],[3,3])
    CiExp = ndarray([-4, -56, -4,  -4, -104,  -4,  -4, -152,  -4],[3,3])

    assert(gemm(Ar,Ai,Br,Bi,Cr,Ci), 'gemm returns true on success')

    assert( ndt.approximatelyEqual( CrExp, Cr, 1e-4), 'real part of C = A*B is correct')
    assert( ndt.approximatelyEqual( CiExp, Ci, 1e-4), 'imag part of C = A*B is correct')
  })

})

