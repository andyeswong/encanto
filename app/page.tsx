import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flower } from "lucide-react"

export default function Home() {
  const amazonShirts = [
    {
      name: "Boys Guayabera Shirts Cuban Short Sleeve",
      image: "/images/shirt1.jpg",
      priceUSD: 16.99,
      priceMXN: 340,
      sizes: "Varias tallas disponibles",
    },
    {
      name: "Makkrom Boys Guayabera Short Sleeve",
      image: "/images/shirt3.jpg",
      priceUSD: 12.74,
      priceMXN: 255,
      sizes: "Varias tallas disponibles",
    },
  ]

  const mercadolibreShirts = [
    {
      name: "Guayabera Artesanal De Niño Tallas 1 - 12",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_656960-MLM77201231057_062024-E-guayabera-artesanal-de-nino-tallas-1-12.webp",
      price: "$199",
      url: "https://articulo.mercadolibre.com.mx/MLM-1971891391-guayabera-artesanal-de-nino-tallas-1-12-_JM?searchVariation=179116591498#polycard_client=search-nordic&searchVariation=179116591498&position=4&search_layout=grid&type=item&tracking_id=f0e7274e-6f72-4d5b-a06a-af5bc87a7fa7",
    },
    {
      name: "Guayabera Charly De Manta Para Niños",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_961004-MLM77900765114_082024-E-guayabera-charly-de-manta-para-ninos.webp",
      price: "$329",
      url: "https://articulo.mercadolibre.com.mx/MLM-909947483-guayabera-charly-de-manta-para-ninos-_JM?searchVariation=82487703804#polycard_client=search-nordic&searchVariation=82487703804&position=5&search_layout=grid&type=item&tracking_id=f0e7274e-6f72-4d5b-a06a-af5bc87a7fa7",
    },
    {
      name: "Guayabera Para Niño",
      image: "https://http2.mlstatic.com/D_Q_NP_2X_811612-MLM75822383792_042024-E-guayabera-para-nino.webp",
      price: "$179",
      url: "https://articulo.mercadolibre.com.mx/MLM-872066968-guayabera-para-nino-_JM?searchVariation=75558178245#polycard_client=search-nordic&searchVariation=75558178245&position=10&search_layout=grid&type=item&tracking_id=f0e7274e-6f72-4d5b-a06a-af5bc87a7fa7",
    },
  ]
  
  const localShirts = [
    {
      name: "Guayabera con Color",
      image: "/images/guaya1.jpeg",
      price: "200",
      description: "Guayabera colorida hecha localmente",
    },
    {
      name: "Guayabera Blanca",
      image: "/images/guaya2.jpeg",
      price: "300",
      description: "Guayabera blanca tradicional hecha por artesanos locales",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-100">


      {/* Introduction */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
              <Flower className="relative w-full h-full text-yellow-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">Opciones de Vestuario para el Evento Encanto</h2>
          <p className="text-lg text-yellow-900 mb-8">
            Estimados padres de familia, les compartimos estas opciones de camisas para que puedan elegir el vestuario
            de sus hijos para nuestro evento temático de la película Encanto. Estas camisas reflejan el estilo
            colombiano de los personajes masculinos de la historia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Guayaberas</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Estilo Colombiano
            </span>
            <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              Evento Escolar
            </span>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-yellow-800 mb-12">Opciones Disponibles</h2>
          
          {/* Local Provider Options */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-200 mb-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-2 text-center">
                  Proveedor Local
                </h3>
                <p className="text-center text-purple-700 mb-4">Disponibilidad inmediata y apoyo a artesanos locales</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {localShirts.map((shirt, index) => (
                  <Card key={index} className="overflow-hidden border-2 border-purple-100 transition-all duration-300">
                    <div className="relative h-64 bg-white">
                      <Image
                        src={shirt.image || "/placeholder.svg"}
                        alt={shirt.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-b from-white to-purple-50">
                      <h3 className="font-bold text-lg text-purple-800 mb-2">{shirt.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{shirt.description}</p>
                      <div className="mt-4">
                        <p className="text-lg font-medium text-purple-700">Precio: ${shirt.price} MXN</p>
                        <p className="text-xs text-gray-500 mt-2">*Disponible con entrega inmediata</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* MercadoLibre Options */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200 mb-8">
                <h3 className="text-2xl font-bold text-green-800 mb-2 text-center">
                  Opciones en MercadoLibre (México)
                </h3>
                <p className="text-center text-green-700 mb-4">Envío nacional y disponibilidad local</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mercadolibreShirts.map((shirt, index) => (
                  <Card key={index} className="overflow-hidden border-2 border-green-100 transition-all duration-300">
                    <div className="relative h-64 bg-white">
                      <Image
                        src={shirt.image || "/placeholder.svg"}
                        alt={shirt.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-b from-white to-green-50">
                      <h3 className="font-bold text-lg text-green-800 mb-2">{shirt.name}</h3>
                      <div className="mt-4">
                        <p className="text-lg font-medium text-green-700">Precio: {shirt.price} MXN</p>
                        <p className="text-xs text-gray-500 mt-2">*Precio referencial de MercadoLibre</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Amazon Options */}
          <div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-6 rounded-lg border-2 border-amber-200 mb-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-2 text-center">Opciones en Amazon (USA)</h3>
                <p className="text-center text-amber-700 mb-4">Requieren envío internacional</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {amazonShirts.map((shirt, index) => (
                  <Card key={index} className="overflow-hidden border-2 border-amber-100 transition-all duration-300">
                    <div className="relative h-64 bg-white">
                      <Image
                        src={shirt.image || "/placeholder.svg"}
                        alt={shirt.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-6 bg-gradient-to-b from-white to-amber-50">
                      <h3 className="font-bold text-lg text-amber-800 mb-2">{shirt.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{shirt.sizes}</p>
                      <div>
                        <p className="text-lg font-medium text-amber-700">${shirt.priceUSD} USD</p>
                        <p className="text-sm text-amber-600">Aproximadamente ${shirt.priceMXN} MXN</p>
                        <p className="text-xs text-gray-500 mt-2">*Precios referenciales de Amazon</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <section className="py-16 bg-gradient-to-b from-yellow-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-yellow-200">
              <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">Información del Evento</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-700 mb-2">Detalles</h3>
                  <ul className="space-y-2 text-yellow-900">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Evento temático de la película Encanto de Disney</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Para niños de la escuela</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Vestuario inspirado en el estilo colombiano</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-700 mb-2">Instrucciones</h3>
                  <ul className="space-y-2 text-yellow-900">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Por favor, revisen las opciones y elijan la que prefieran</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Recomendamos las opciones de provedor local por su disponibilidad local</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Confirmen su elección con Yuny Gomez (mami de Andre)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
