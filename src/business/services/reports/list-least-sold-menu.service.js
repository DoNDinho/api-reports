'use strict'
const reportsRepository = require('../../../data/repository/reports.repository')
const { salesMenuConverter, salesMenuConverterDetails } = require('../../converter/sales-menu.converter')

const execute = async (data, limitData) => {
  try {
    const limit = limitData ? +limitData : 5
    const reportsData = await listLeastSoldMenu(data, limit)
    if(reportsData.length == 0) return {}
    const details = reportsData.map((detail) => salesMenuConverterDetails(detail))

    return salesMenuConverter(reportsData[0], details)
  } catch (error) {
    throw error
  }
}

const listLeastSoldMenu = async (data, limit) => {
  try {
    const result = await reportsRepository.listLeastSoldMenu(data, limit)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
