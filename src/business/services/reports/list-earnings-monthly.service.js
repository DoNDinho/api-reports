'use strict'
const reportsRepository = require('../../../data/repository/reports.repository')
const { monthlySalesConvert } = require('../../converter/monthly-sales.converter')
const { salesConvert } = require('../../converter/sales.converter')

const execute = async (date) => {
  try {
    const reportsData = await listMonthlyEarnings(date)
    const details = reportsData.map((detail) => monthlySalesConvert(detail))
    return salesConvert(reportsData[0], details)
  } catch (error) {
    throw error
  }
}

const listMonthlyEarnings = async (date) => {
  try {
    const result = await reportsRepository.listMonthlyEarnings(date)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
