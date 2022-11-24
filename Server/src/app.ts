import express, { Application } from 'express'
import morgan from 'morgan'

import AuthRoutes from './Routes/auth.routes'

import ClientRoutes from './Routes/Tables/client.routes'
import InstallerRoutes from './Routes/Tables/installer.routes'
import OfficeRoutes from './Routes/Tables/office.routes'
import AdviserRoutes from './Routes/Tables/adviser.routes'
import ProducerRoutes from './Routes/Tables/producer.routes'
import SaleRoutes from './Routes/Tables/sale.routes'
import OrderRoutes from './Routes/Tables/order.routes'
import ProductRoutes from './Routes/Tables/product.routes'

export class App {
  private readonly app: Application

  constructor (private readonly port?: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  settings (): void {
    this.app.set('port', this.port ?? process.env.PORT ?? 5500)
  }

  middlewares (): void {
    this.app.use(morgan('dev'))
    this.app.use(express.json())
  }

  routes (): void {
    this.app.use('/api',AuthRoutes)

    this.app.use('/api/cliente', ClientRoutes)
    this.app.use('/api/instalador', InstallerRoutes)
    this.app.use('/api/sucursal', OfficeRoutes)
    this.app.use('/api/asesor', AdviserRoutes)
    this.app.use('/api/productor', ProducerRoutes)
    this.app.use('/api/venta', SaleRoutes)
    this.app.use('/api/pedido', OrderRoutes)
    this.app.use('/api/producto', ProductRoutes)
    // This
    this.app.use('/api/mantenimiento', AdviserRoutes)
    this.app.use('/api/cita', AdviserRoutes)
    this.app.use('/api/venta_incluye_producto', AdviserRoutes)
  }

  listen (): void {
    this.app.listen(this.app.get('port'))
    console.log('Server on port', this.app.get('port'))
  }
}
