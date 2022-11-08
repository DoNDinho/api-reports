'use strict'
const listMonthlyEarnings = (date) => {
  return {
    name: 'SP_LISTAR_GANANCIAS_MENSUALES',
    statements: [`CALL SP_LISTAR_GANANCIAS_MENSUALES("${date}");`],
    values: []
  }
}

const listAnnualEarnings = (year) => {
  return {
    name: 'SP_LISTAR_GANANCIAS_ANUALES',
    statements: [`CALL SP_LISTAR_GANANCIAS_ANUALES(${year});`],
    values: []
  }
}

module.exports = {
  listMonthlyEarnings,
  listAnnualEarnings
}
