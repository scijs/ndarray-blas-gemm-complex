'use strict'

var blas = require('ndarray-blas-level1-complex')

function ndcgemm ( A_r, A_i, B_r, B_i, C_r, C_i ) {

  var i,j,result
  var m = A_r.shape[0]
  var n = B_r.shape[1]

  var A_ri, A_ii, B_rj, B_ij

  for(i=0; i<m; i++) {

    A_ri = A_r.pick(i,null)
    A_ii = A_i.pick(i,null)

    for(j=0; j<n; j++) {

      B_rj = B_r.pick(null,j)
      B_ij = B_i.pick(null,j)

      result = blas.dotu( A_ri, A_ii, B_rj, B_ij )

      C_r.set(i,j,result[0])
      C_i.set(i,j,result[1])
    }
  }

  return true
}

module.exports = ndcgemm
