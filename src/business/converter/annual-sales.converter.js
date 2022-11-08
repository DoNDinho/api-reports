'use strict'
const annualSalesConvert = (reportData) => {
  return {
    month: reportData.MES,
    amount: {
      total_amount: +reportData.TOTAL_MENSUAL
    }
  }
}

module.exports = { annualSalesConvert }
