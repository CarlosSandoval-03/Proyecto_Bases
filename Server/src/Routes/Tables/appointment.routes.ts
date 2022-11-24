import { Router } from 'express'
import { createAppointment, deleteAppointmentByPrimaryKey, getAppointmentByAdviserId, getAppointmentByClientId, getAppointmentByDate, getAppointmentByPrimaryKey, getAppointments, updateAppointmentByPrimaryKey } from '../../Controllers/Tables/appointment.controller'



const router = Router()

router.route('/')
  .get(getAppointments)
  .post(createAppointment)

  router.route('/atributo/cit_fecha/:cit_fecha')
  .get(getAppointmentByDate)

router.route('/atributo/ase_documento/:ase_documento')
  .get(getAppointmentByAdviserId)

  router.route('/atributo/cli_documento/:cli_documento')
  .get(getAppointmentByClientId)

  router.route('/key/:key')
  .get(getAppointmentByPrimaryKey)
  .delete(deleteAppointmentByPrimaryKey)
  .put(updateAppointmentByPrimaryKey)

export default router
