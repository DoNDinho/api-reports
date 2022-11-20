'use strict'
const averagePreparationTimeConverter = (data, detailsData) => {
  return {
    month: data.MES,
    details: detailsData
  }
}

const averagePreparationTimeConverterDetails = (data) => {
  return {
    menu: {
      name: data.NOMBRE
    },
    preparation_time: data.TIEMPO_PREP,
    delay_time: parseInt(data.TIEMPO_DEMORA),
  }
}

module.exports = { 
  averagePreparationTimeConverter,
  averagePreparationTimeConverterDetails
}
