import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const links = [
    { name: 'Privacidad', href: '#' },
    { name: 'Inversores', href: '#' },
    { name: 'Fundadores', href: '#' },
]
const stats = [
    { name: 'Locaciones por día', value: '12' },
    { name: 'Horas de trabajo duro', value: '300+' },
    { name: 'Días al año', value: '365' },
    { name: 'Destinos turisticos', value: 'Ilimitados' },
]



const NuestraHistoria = () => {
    return (
        <div>  {/* INICIO MAIN */}
            <Navbar />

            {/* <div className='grid grid-cols-2 grid-flow-row m-10 gap-10'>  INICIO DEL GRID 
                <div className=''>
                    <img src={"https://cdn.pixabay.com/photo/2017/04/11/21/34/giraffe-2222908_1280.jpg"} alt="Mi imagen" className='max-h-full max-w-full' />
                
                    <div className='text-center text-xl text-red-500'>

                        <p className='text-center text'>
                            MISION
                        </p>

                        <p>
                            VISION
                        </p>

                        <p>
                            OBJETIVOS
                        </p>
                    </div>
                </div>
                <div className=''>
                    <img src={"https://img.freepik.com/foto-gratis/casa-diseno-villa-moderna-sala-estar-planta-abierta-dormitorio-privado-ala-gran-terraza-privacidad_1258-169758.jpg?w=826&t=st=1686886205~exp=1686886805~hmac=74752c4ba4c1b4f1e108a9f94cd30169c60d4cb861bc94a97f67d41b282521df"} alt="Mi imagen" className='max-h-80 max-w-xs' />
                    PRUEBITA
                </div>
            </div>  FIN DEL GRID */}

            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img
                    src="https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_1280.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Sobre nosotros

                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Nunc finibus varius placerat. Etiam quis velit bibendum, blandit mi non, semper ipsum. Suspendisse dictum nec velit a fermentum. Donec tincidunt quis enim eget faucibus. Vestibulum ante dolor, porta id egestas ut, varius eu justo. Quisque at mi pulvinar elit fermentum consectetur quis in ex. Aliquam erat volutpat. In a ullamcorper nisl. Cras eu bibendum odio, eget ultrices ante. Donec aliquam urna vel tortor commodo, sit amet pulvinar lectus semper.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            <Footer/>





        </div>  // FIN MAIN
    )
}

export default NuestraHistoria