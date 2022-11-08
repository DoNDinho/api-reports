const express = require('express')
const listEarningsMonthlyService = require('../../business/services/reports/list-earnings-monthly.service')
const listEarningAnnualService = require('../../business/services/reports/list-earnings-annual.service')
const router = express.Router()

router.post(`/Reports/v1/earnings/monthly`, async (req, res, next) => {
  try {
    const response = await listEarningsMonthlyService.execute(req.body.date)
    res.json({ monthly_sales: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.post(`/Reports/v1/earnings/annual`, async (req, res, next) => {
  try {
    const response = await listEarningAnnualService.execute(req.body.year)
    res.json({ annual_sales: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})
module.exports = router
