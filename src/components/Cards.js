import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
  EyeIcon,
  BuildingLibraryIcon,
  KeyIcon,
} from "@heroicons/react/24/solid";
 
const Cards = () => {
  return (
    <div> {/* INICIO DEL MAIN */}
    <div className='p-3'></div>

    
    <div className="grid bg-red-400 space-y-2 space-x-2 
                    sm:grid-cols-2
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4">
     
{/* INICIO DE LA TARJETA INDIVIDUAL */}
    <div>
    <Card className="w-full max-w-[20rem] shadow-lg p-3">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/03/Airbnb-competitors.jpg"
          alt="IMAGEN LUGAR"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </Typography>
        </div>

        <Typography color="gray">
          DESCRIPCION
        </Typography>

        <Typography color="BLACK">
          PRECIO
        </Typography>

         {/* SERVICIOS */}
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <HomeIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
        
          {/* FIN DE SERVICIOS */}

        </div>
      </CardBody>
      <CardFooter className="pt-1">
        <Button size="sm" fullWidth={true} color='red'>
          RESERVAR
        </Button>
      </CardFooter>
    </Card>
    </div>
{/* FIN DE LA TARJETA INDIVIDUAL */}


{/* INICIO DE LA TARJETA INDIVIDUAL */}
    <div>
    <Card className="w-full max-w-[20rem] shadow-lg p-3">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/03/Airbnb-competitors.jpg"
          alt="IMAGEN LUGAR"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </Typography>
        </div>

        <Typography color="gray">
          DESCRIPCION
        </Typography>

        <Typography color="BLACK">
          PRECIO
        </Typography>

         {/* SERVICIOS */}
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <HomeIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
        
          {/* FIN DE SERVICIOS */}

        </div>
      </CardBody>
      <CardFooter className="pt-1">
        <Button size="sm" fullWidth={true} color='red'>
          RESERVAR
        </Button>
      </CardFooter>
    </Card>
    </div>

    {/* INICIO DE LA TARJETA INDIVIDUAL */}
    <div>
    <Card className="w-full max-w-[20rem] shadow-lg p-3">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/03/Airbnb-competitors.jpg"
          alt="IMAGEN LUGAR"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </Typography>
        </div>

        <Typography color="gray">
          DESCRIPCION
        </Typography>

        <Typography color="BLACK">
          PRECIO
        </Typography>

         {/* SERVICIOS */}
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <HomeIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
        
          {/* FIN DE SERVICIOS */}

        </div>
      </CardBody>
      <CardFooter className="pt-1">
        <Button size="sm" fullWidth={true} color='red'>
          RESERVAR
        </Button>
      </CardFooter>
    </Card>
    </div>
{/* FIN DE LA TARJETA INDIVIDUAL */}


{/* INICIO DE LA TARJETA INDIVIDUAL */}
    <div>
    <Card className="w-full max-w-[20rem] shadow-lg p-3">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://cloudbeds-fcfc.kxcdn.com/wp-content/uploads/2022/03/Airbnb-competitors.jpg"
          alt="IMAGEN LUGAR"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Wooden House, Florida
          </Typography>
          <Typography
            color="blue-gray"
            className="flex items-center gap-1.5 font-normal"
          >
            <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </Typography>
        </div>

        <Typography color="gray">
          DESCRIPCION
        </Typography>

        <Typography color="BLACK">
          PRECIO
        </Typography>

         {/* SERVICIOS */}
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="Free wifi">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <WifiIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="2 bedrooms">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <HomeIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <TvIcon className="h-5 w-5" />
            </span>
          </Tooltip>
          <Tooltip content="Fire alert">
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FireIcon className="h-5 w-5" />
            </span>
          </Tooltip>
        
          {/* FIN DE SERVICIOS */}

        </div>
      </CardBody>
      <CardFooter className="pt-1">
        <Button size="sm" fullWidth={true} color='red'>
          RESERVAR
        </Button>
      </CardFooter>
    </Card>
    </div>
    

    </div>
    </div>
  )
}

export default Cards