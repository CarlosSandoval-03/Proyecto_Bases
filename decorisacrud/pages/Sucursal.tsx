import React, { useState } from 'react'
import { IconContext } from 'react-icons';
import * as hiIcon from 'react-icons/hi';
import * as mdIcon from 'react-icons/md';
import * as biIcon from 'react-icons/bi';
import * as aiIcon from 'react-icons/ai';

import Navbar from '../Components/Navbar'
import { Formik } from 'formik';

let Sucursales = [
  {
    suc_direccion: '',
    suc_nombre: '',
  }
]

function Sucursal() {
  const [showEditarSucursal, setShowEditarSucursal] = useState(false)
  const [idSucursalEditar, setIdSucursalEditar] = useState('')
  const [showFormCrearSucursal, setshowFormCrearSucursal] = useState(false)

  interface Sucursal {
    suc_nombre: string,
    suc_direccion: string,

  }
  const traerSucursales = () => {
    // busca trae las sucursales
    let sucursal = [
      {
        suc_direccion: 'Cr51 #134-14',
        suc_nombre: 'Decorisa Spring',
      },
      {
        suc_direccion: 'Cr51 #135-14',
        suc_nombre: 'Decorisa Spring',
      },
      {
        suc_direccion: 'Cr51 #133-14',
        suc_nombre: 'Decorisa Spring',
      },
    ]
    Sucursales = sucursal
  }
  const statusShowEditarSucursal = (direccion: string) => {
    setShowEditarSucursal(true)
    setIdSucursalEditar(direccion)
  }
  const editarSucursal = async (values: Sucursal) => {
    // se envia la info para editar
    setShowEditarSucursal(false)

  }
  const crearSucursal = async (values: Sucursal) => {
    // se envia la info para crear
    console.log(values.suc_direccion)
    console.log(values.suc_nombre)
    setshowFormCrearSucursal(false)

  }
  traerSucursales()
  return (
    <>
      <Navbar></Navbar>
      <div className='pagina'>
        <div className='flex flex-wrap'>
          <IconContext.Provider value={{ size: '2.5rem' }}>
            <hiIcon.HiOfficeBuilding />
          </IconContext.Provider>
          <h1>Sucursales</h1>
          

        </div>
        <h2>Ubica la Sucursal que te quede mas cerca y visitanos</h2>

        <div className='flex flex-wrap'>
          {Sucursales.map((item, index) => {
            if (item.suc_direccion == idSucursalEditar && showEditarSucursal == true) {
              return (
                <div key={index} className='ventana-edit-sucursal '>
                  <aiIcon.AiFillCloseCircle onClick={() => setShowEditarSucursal(false)} className='button-cerrar' />
                  <div className=' grid justify-items-center'>
                    <div className='circulo   grid justify-items-center'>
                      <mdIcon.MdPlace color='000000' size={'6rem'} />
                    </div>
                    <Formik
                      initialValues={{
                        suc_nombre: item.suc_nombre,
                        suc_direccion: item.suc_direccion,


                      }}
                      onSubmit={async (values) => {

                        editarSucursal(values)


                        //alert(JSON.stringify(values));

                      }}

                    >
                      {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                          <div className=''>
                            <div className="flex flex-nowrap items-center ">
                              <label className="">Nombre:</label>
                              <input name="suc_nombre" type="text" placeholder={item.suc_nombre} className=""
                                value={values.suc_nombre}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-nowrap items-center ">
                              <label className="">Direccion:</label>
                              <input name="suc_direccion" type="text" placeholder={item.suc_nombre} className=""
                                value={values.suc_direccion}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='flex flex-col justify-center items-center '>
                              <button type="submit" className="btn-add-product "> Editar </button>
                            </div>

                          </div>




                        </form>
                      )}

                    </Formik>


                  </div>



                </div>


              )
            } else {


              return (
                <div key={index} className='sucursal grid justify-items-center'>

                  <div className='circulo   grid justify-items-center'>
                    <mdIcon.MdPlace color='FFEEDF' size={'6rem'} />
                  </div>
                  <h2 className='text-3xl font-bold'>{item.suc_nombre}</h2>
                  <div className='flex flex-wrap'>
                    <label>Direccion</label>
                    <h2 className='text-base'>{item.suc_direccion}</h2>
                  </div>
                  <biIcon.BiEditAlt onClick={() => { statusShowEditarSucursal(item.suc_direccion) }} className='icono-boton'  size={'5rem'} />

                </div>
              )
            }
          })
          }


          <div className='sucursal-nuevo grid justify-items-center content-center'>
            <mdIcon.MdOutlineAddBusiness onClick={() => { setshowFormCrearSucursal(true) }} className='icono-boton'  size={'9rem'} />
            <h2 className='text-3xl font-bold'>Nueva Sucursal</h2>
          </div>
          {showFormCrearSucursal ?(
            <div className='sucursal-form'>
              <aiIcon.AiFillCloseCircle onClick={() => setshowFormCrearSucursal(false)} className='button-cerrar' />
              <h3>Nueva Sucursal</h3>
              
                  <div className=' grid justify-items-center'>
                    <Formik
                      initialValues={{
                        suc_nombre: '',
                        suc_direccion: '',


                      }}
                      onSubmit={async (values) => {

                        crearSucursal(values)


                        //alert(JSON.stringify(values));

                      }}

                    >
                      {({ handleSubmit, values, handleChange }) => (
                        <form onSubmit={handleSubmit}>
                          <div className=''>
                            <div className="flex flex-nowrap items-center ">
                              <label className="">Nombre:</label>
                              <input name="suc_nombre" type="text" placeholder='nombre' className=""
                                value={values.suc_nombre}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="flex flex-nowrap items-center ">
                              <label className="">Direccion:</label>
                              <input name="suc_direccion" type="text" placeholder='direccion' className=""
                                value={values.suc_direccion}
                                onChange={handleChange}
                              />
                            </div>
                            <div className='flex flex-col justify-center items-center '>
                              <button type="submit" className="button-mas "> Crear </button>
                            </div>

                          </div>




                        </form>
                      )}

                    </Formik>


                  </div>


            </div>
          ):null

          }


        </div>

        




      </div>
    </>

  )
}

export default Sucursal