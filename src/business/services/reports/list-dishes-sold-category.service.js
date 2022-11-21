'use strict'
const reportsRepository = require('../../../data/repository/reports.repository')
const { menusSoldConverter, categoriesSoldConverter, menuSoldsDetailsConverter } = require('../../converter/dishes-sold-category.converter')

const execute = async (data) => {
  try {
    const reportsData = await listDishesSoldCategory(data)
    if(reportsData.length == 0) return {}

    const dates = [...new Set(reportsData.map(report => report.FECHA_VENTA.toISOString()))]
    const categorySoldsData = dates.map(date => {
      return reportsData.filter(data => date === data.FECHA_VENTA.toISOString())
    })
    const details = categorySoldsData.map(data => {
      const categorySold = data.map(d => categoriesSoldConverter(d))
      return menuSoldsDetailsConverter(data[0], categorySold)
    })
    
    return menusSoldConverter(reportsData[0], details)
  } catch (error) {
    throw error
  }
}

const listDishesSoldCategory = async (data) => {
  try {
    const result = await reportsRepository.listDishesSoldCategory(data)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
