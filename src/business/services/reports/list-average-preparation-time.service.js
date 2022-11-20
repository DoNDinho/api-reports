'use strict'
const reportsRepository = require('../../../data/repository/reports.repository')
const { 
  averagePreparationTimeConverter,
  averagePreparationTimeConverterDetails
  } = require('../../converter/average-preparation-time.converter')

const execute = async (data) => {
  try {
    const reportsData = await listAveragePreparationTime(data)
    if(reportsData.length == 0) return {}
    const details = reportsData.map((detail) => averagePreparationTimeConverterDetails(detail))
    return averagePreparationTimeConverter(reportsData[0], details)
  } catch (error) {
    throw error
  }
}

const listAveragePreparationTime = async (data) => {
  try {
    const result = await reportsRepository.listAveragePreparationTime(data)
    return result
  } catch (error) {
    throw { httpCode: 422, message: error.message }
  }
}

module.exports = { execute }
