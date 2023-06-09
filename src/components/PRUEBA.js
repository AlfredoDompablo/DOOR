import React from 'react'


const PRUEBA = () => {
  return (
    <div> {/*   INICIO DEL MAIN  */}
      {/*
     <div className="grid-cols-3 bg-orange-700 gap-1">  MUESTRA DE LOCACIONES 
     PRUEBA DE COLUMNAS 
        <div > 
              columna 1
        </div>
        <div> 
              Columna 2
        </div>
        <div> 
              Columna 3
        </div>
    </div>
*/}


      <div className="grid gap-4 grid-cols-3 grid-rows-2 mx-2 bg-gray-400 px-4 m-4 space-x-0.5 space-y-0.5">
                      
        <div>
          <div class="bg-red-100 items-center px-4 m-4">
            <img src="../assets/img1.png" alt="Descripción de la imagen" class="w-64 h-64 rounded-lg shadow-md"></img>
          </div>
        </div>
        <div>
          <div class="bg-blue-200 items-center px-4 m-4">
            <img src="..\door\src\assets\img2.jpg" alt="Descripción de la imagen" class="w-64 h-64 rounded-lg shadow-md"></img>
          </div>
        </div>
        <div>
          <div className="bg-orange-300 items-center px-4 m-4">
            <img src="door\src\assets\img1.jpg" alt="Descripción de la imagen" class="w-64 h-64 rounded-lg shadow-md"></img>
          </div>
        </div>
        <div>
          <div class=" bg-light-green-100">
            <img src="door\src\assets\img1.jpg" alt="Descripción de la imagen" class="w-64 h-64 rounded-lg shadow-md"></img>
          </div>
        </div>
        <div>
          <div class=" bg-pink-800">
            <img src="door\src\assets\img1.jpg" alt="Descripción de la imagen" class="w-64 h-64 rounded-lg shadow-md"></img>
          </div>
        </div>
        <div>
          <div class=" bg-green-900">
            <img src="door\src\assets\img1.jpg" alt="Descripción" class="w-64 h-64 rounded-lg shadow-md"></img>
          </div>
        </div>
      </div>


{/* <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel> */}











    </div> // FIN DEL MAIN
  )
}

export default PRUEBA