'use strict'
const listMonthlySales = (date) => {
  return {
    name: 'SP_LISTAR_VENTAS_MENSUALES',
    statements: [`CALL SP_LISTAR_VENTAS_MENSUALES("${date}");`],
    values: []
  }
}

const listAnnualSales = (year) => {
  return {
    name: 'SP_LISTAR_VENTAS_ANUALES',
    statements: [`CALL SP_LISTAR_VENTAS_ANUALES(${year});`],
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

const listAveragePreparationTime = (data) => {
  const date = data.date
  const idCategory = data.category.code
  return {
    name: 'SP_LISTAR_TIEMPO_PROMEDIO_PEDIDO',
    statements: [`CALL SP_LISTAR_TIEMPO_PROMEDIO_PEDIDO("${date}", ${idCategory});`],
    values: []
  }
}

const listDishesSoldCategory = (data) => {
  const date = data.date
  return {
    name: 'SP_LISTAR_PLATOS_VENDIDOS_CATEGORIA',
    statements: [`CALL SP_LISTAR_PLATOS_VENDIDOS_CATEGORIA("${date}");`],
    values: []
  }
}

module.exports = {
  listMonthlySales,
  listAnnualSales,
  listBestSellersMenu,
  listLeastSoldMenu,
  listAveragePreparationTime,
  listDishesSoldCategory
}

