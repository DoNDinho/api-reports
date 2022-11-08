const { formatDate } = require('../utils/date/date-formatter')

;('use strict')
const monthlySalesConvert = (reportData) => {
  return {
    date: formatDate(reportData.FECHA_VENTA),
    sales_quantity: reportData.CANTIDAD_VENTAS,
    amount: {
      total_amount: +reportData.TOTAL_DIARIO
    }
  }
}

module.exports = { monthlySalesConvert }
