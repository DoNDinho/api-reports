'use strict'
const reportsRepository = require('../../../data/repository/reports.repository')
const { monthlySalesConvert } = require('../../converter/monthly-sales.converter')
const { salesConvert } = require('../../converter/sales.converter')

const execute = async (date) => {
  try {
    const reportsData = await listMonthlySales(date)
    if(reportsData.length == 0) return {}
    const details = reportsData.map((detail) => monthlySalesConvert(detail))
    return salesConvert(reportsData[0], details)
  } catch (error) {
    throw error
  }
}

const listMonthlySales = async (date) => {
  try {
    const result = await reportsRepository.listMonthlySales(date)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
