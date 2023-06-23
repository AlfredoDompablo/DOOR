//import Datepicker from "flowbite-datepicker/Datepicker";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Formik } from "formik";
import { createUserRequest } from "../api/user.api";

//<script src="../path/to/flowbite/dist/datepicker.js"></script>;
const SingUp = () => {
  return (
    <div>
      {/* INICIO MAIN */}
      <Navbar />
      <div>
        <div className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <div className="relative flex h-28 items-end bg-gray-900 lg:col-span-4 lg:h-full xl:col-span-5 ">
              <img
                alt="Night"
                src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />

              {/* INICIO DE LAS LETRAS IMAGENES */}
              <div className="hidden lg:relative lg:block lg:p-16 ">
                <a className="block text-white" href="/">
                  <span className="sr-only">Home</span>
                  {/* <svg
                    className="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="currentColor"
                    />
                  </svg> */}
                </a>

                <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  BIENVENIDO A DoOr
                </h2>

                <p className="mt-4 leading-relaxed text-white/90">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>
            </div>
            {/* FIN DEL CODIGO DE LETRAS IMAGENES */}

            {/* INICIO FORM */}
            <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-8 lg:py-12 xl:col-span-7">
              <div className="max-w-xl lg:max-w-full">
                <div className="mt-8 font-medium text-gray-800 sm:text-3xl md:text-4xl my-10">
                  REGISTRATE
                </div>

                <Formik
                  initialValues={{
                    FirstName: "",
                    LastName: "",
                    email: "",
                    password: "",
                    LastName2: "",
                    telefono: "",
                    nac: "",
                    
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values,  { setSubmitting }) => {
                    setTimeout(async () => {
                      //alert(JSON.stringify(values, null, 2));
                      try {
                        //alert(values);
                        const response = await createUserRequest(values);
                        console.log(response);
                        // actions.resetForm();
                      } catch (error) {
                        console.error(error);
                      }
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form  className="grid grid-cols-9 gap-5 " onSubmit={handleSubmit}>
                      {/* INICIA PRIMER BLOQUE */}
                      <div
                        className="col-span-9
                                            sm:col-span-3
                                            md:col-span-3
                                            lg:col-span-3
                                            xl:col-span-3"
                      >
                        <label
                          //htmlFor="NOMBRES"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nombres
                        </label>
                        <input
                          type="text"
                          id="FirstName"
                          name="FirstName"
                          className="mt-1 w-full rounded-lg border-black bg-gray-50 text-sm text-gray-700 shadow-md"
                          onChange={handleChange}
                      onBlur={handleBlur}
                          value={values.FirstName}
                        />
                      </div>

                      <div
                        className="col-span-9
                                            sm:col-span-3
                                            md:col-span-3
                                            lg:col-span-3
                                            xl:col-span-3"
                      >
                        <label
                        //   htmlFor="LastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Primer Apellido
                        </label>
                        <input
                          type="text"
                          id="LastName"
                          name="LastName"
                          className="mt-1 w-full rounded-lg border-black bg-gray-50 text-sm text-gray-700 shadow-md"
                          onChange={handleChange}
                      onBlur={handleBlur}
                          value={values.LastName}                        
                        />
                      </div>

                      <div
                        className="col-span-9
                                            sm:col-span-3
                                            md:col-span-3
                                            lg:col-span-3
                                            xl:col-span-3"
                      >
                        <label
                        //   htmlFor="LastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Segundo Apellido
                        </label>
                        <input
                          type="text"
                          id="LastName2"
                          name="LastName2"
                          className="mt-1 w-full rounded-lg border-black bg-gray-50 text-sm text-gray-700 shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}   
                          value={values.LastName2}                      
                        />
                      </div>

                      <div
                        className="col-span-9
                                            sm:col-span-6
                                            md:col-span-6
                                            lg:col-span-6
                                            xl:col-span-6"
                      >
                        <label
                        //   htmlFor="Email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="Email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-1 w-full rounded-lg border-black bg-gray-50 text-sm text-gray-700 shadow-md"
                          value={values.email}
                       />
                        {errors.email && touched.email && errors.email}
                      </div>

                      <div
                        className="col-span-9
                                            sm:col-span-3
                                            md:col-span-3
                                            lg:col-span-3
                                            xl:col-span-3"
                      >
                        <label
                        //   htmlFor="Email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Numero de telefono
                        </label>
                        <input
                          type=""
                          id="telefono"
                          name="telefono"
                          className="mt-1 w-full rounded-lg border-black bg-gray-50 text-sm text-gray-700 shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.telefono}
                        />
                      </div>

                      <div className="col-span-full">
                        <label
                        //   htmlFor="Email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fecha de Nacimiento
                        </label>

                        <div className="relative max-w-sm">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            {/* <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              ></path>
                            </svg> */}
                          </div>
                          <input
                            // datepicker
                            type="date"
                            id="nac"
                            name="nac"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.nac}
                          />
                        </div>
                      </div>

                      <div
                        className="col-span-9
                                            sm:col-span-5
                                            md:col-span-5
                                            lg:col-span-5
                                            xl:col-span-5"
                      >
                        <label
                        //   htmlFor="Password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contraseña
                        </label>
                        <input
                          type="password"
                          id="Password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="mt-1 w-full rounded-lg border-black bg-gray-50 text-sm text-gray-700 shadow-md"
                          value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
                      </div>

                      <div
                        className="col-span-9
                                            sm:col-span-4
                                            md:col-span-4
                                            lg:col-span-4
                                            xl:col-span-4"
                      >
                        <label
                        //   htmlFor="PasswordConfirmation"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Confirmar contraseña
                        </label>

                        <input
                          type="password"
                          id="PasswordConfirmation"
                          name="password_confirmation"
                          className="mt-1 w-full rounded-lg border-black bg-gray-50 text-sm text-gray-700 shadow-md"
                        />
                        {errors.password && touched.password && errors.password}
                      </div>

                      {/* INICIO PARTE CONFIRMACION */}
                      <div className="col-span-9">
                        <label  className="flex gap-4">
                          <input
                            type="checkbox"
                            id="MarketingAccept"
                            name="marketing_accept"
                            className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                          />

                          <span className="text-sm text-gray-700">
                            Recibir notificaciones y correos con promociones
                            especiales.
                          </span>
                        </label>
                      </div>

                      <div className="col-span-full">
                        <p className="text-sm text-gray-500">
                          Al hacer clic en "Registrarte", aceptas nuestros
                          <a href="/Privacidad" className="text-gray-700 underline">
                            "Terminos y Condiciones"
                          </a>
                          y
                          <a href="/" className="text-gray-700 underline">
                            Politica de Privacidad
                          </a>
                          .
                        </p>
                      </div>

                      <div className="col-span-full sm:flex sm:items-center sm:gap-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                          CREAR UNA CUENTA
                        </button>

                        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                          ¿Ya tienes una cuenta?
                          
                          <a href="/" className="text-gray-700 underline">
                            INICIAR SESIÓN
                          </a>
                        </p>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div> // FIN MAIN
  );
};

export default SingUp;
