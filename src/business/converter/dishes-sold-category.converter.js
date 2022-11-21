'use strict'
const menusSoldConverter = (data, detailsData) => {
  return {
    month: data.MES,
    details: detailsData
  }
}

const menuSoldsDetailsConverter = (data, categoriesSold) => {
  return {
    date: data.FECHA_VENTA.toISOString().split('T')[0],
    categories_sold: categoriesSold
  }
}

const categoriesSoldConverter = (data) => {
  return {
    category: {
      code: data.ID_CATEGORIA,
      name: data.DESCRIPCION
    },
    sales_quantity: parseInt(data.CANTIDAD)
  }
}

module.exports = {
  menusSoldConverter,
  menuSoldsDetailsConverter,
  categoriesSoldConverter
}
