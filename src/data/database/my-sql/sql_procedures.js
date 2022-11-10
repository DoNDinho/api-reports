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

const listBestSellersMenu = (data, limit) => {
  const date = data.date
  const idCategory = data.category.code
  return {
    name: 'SP_LISTAR_PLATOS_MENSUALES_MAS_VENDIDOS',
    statements: [`CALL SP_LISTAR_PLATOS_MENSUALES_MAS_VENDIDOS("${date}", ${idCategory}, ${limit});`],
    values: []
  }
}

const listLeastSoldMenu = (data, limit) => {
  const date = data.date
  const idCategory = data.category.code
  return {
    name: 'SP_LISTAR_PLATOS_MENSUALES_MENOS_VENDIDOS',
    statements: [`CALL SP_LISTAR_PLATOS_MENSUALES_MENOS_VENDIDOS("${date}", ${idCategory}, ${limit});`],
    values: []
  }
}

module.exports = {
  listMonthlyEarnings,
  listAnnualEarnings,
  listBestSellersMenu,
  listLeastSoldMenu
}
