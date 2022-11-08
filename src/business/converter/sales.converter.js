'use strict'
const salesConvert = (reportData, details) => {
  const sales = {
    amount: +reportData.TOTAL_ANUAL || +reportData.TOTAL_MENSUAL,
    details
  }
  if (reportData.ANIO) sales.year = reportData.ANIO.toString()
  return sales
}

module.exports = { salesConvert }
