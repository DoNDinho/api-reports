'use strict'
const salesMenuConverter = (data, detailsData) => {
  return {
    month: data.MES,
    details: detailsData
  }
}

const salesMenuConverterDetails = (data) => {
  return {
    menu: {
      name: data.NOMBRE
    },
    quantity: data.CANTIDAD
  }
}

module.exports = { 
  salesMenuConverter,
  salesMenuConverterDetails
}
