'use strict'
const reportsRepository = require('../../../data/repository/reports.repository')
const { annualSalesConvert } = require('../../converter/annual-sales.converter')
const { salesConvert } = require('../../converter/sales.converter')

const execute = async (year) => {
  try {
    const reportsData = await listAnnualEarnings(year)
    const details = reportsData.map((detail) => annualSalesConvert(detail))
    return salesConvert(reportsData[0], details)
  } catch (error) {
    throw error
  }
}

const listAnnualEarnings = async (year) => {
  try {
    const result = await reportsRepository.listAnnualEarnings(year)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
