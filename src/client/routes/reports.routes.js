const express = require('express')
const listSalesMonthlyService = require('../../business/services/reports/list-sales-monthly.service')
const listSalesAnnualService = require('../../business/services/reports/list-sales-annual.service')
const listLeastSoldMenuService = require('../../business/services/reports/list-least-sold-menu.service')
const listBestSellerMenuService = require('../../business/services/reports/list-best-seller-menu.service')
const listAveragePreparationTime = require('../../business/services/reports/list-average-preparation-time.service')
const listDishesSoldCategory = require('../../business/services/reports/list-dishes-sold-category.service')
const router = express.Router()

router.post(`/Reports/v1/sales/monthly`, async (req, res, next) => {
  try {
    const response = await listSalesMonthlyService.execute(req.body.date)
    res.json({ monthly_sales: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.post(`/Reports/v1/sales/annual`, async (req, res, next) => {
  try {
    const response = await listSalesAnnualService.execute(req.body.year)
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

router.post(`/Reports/v1/menu/average-preparation-time`, async (req, res, next) => {
  try {
    const response = await listAveragePreparationTime.execute(req.body)
    res.json({ average_preparation_time: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

router.post(`/Reports/v1/menu/sold`, async (req, res, next) => {
  try {
    const response = await listDishesSoldCategory.execute(req.body)
    res.json({ menus_sold: response })
  } catch (error) {
    console.log('error: ', error.message)
    next(error)
  }
})

module.exports = router
