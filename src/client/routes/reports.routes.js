const express = require('express')
const listEarningsMonthlyService = require('../../business/services/reports/list-earnings-monthly.service')
const listEarningAnnualService = require('../../business/services/reports/list-earnings-annual.service')
const listLeastSoldMenuService = require('../../business/services/reports/list-least-sold-menu.service')
const listBestSellerMenuService = require('../../business/services/reports/list-best-seller-menu.service')
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

router.post(`/Reports/v1/menu/least-sold`, async (req, res, next) => {
  try {
    const response = await listLeastSoldMenuService.execute(req.body, req.query.limit)
    res.json({ least_sold_menu: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.post(`/Reports/v1/menu/best-seller`, async (req, res, next) => {
  try {
    const response = await listBestSellerMenuService.execute(req.body, req.query.limit)
    res.json({ best_seller_menu: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

module.exports = router
