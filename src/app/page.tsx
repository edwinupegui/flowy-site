'use client'

import Image from 'next/image'

import { Tab, Tabs } from '@nextui-org/react'

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="flex h-screen w-full flex-col bg-gradient-to-l from-[#6FE3C5] via-[#573BD5] to-[#20183F] px-10 py-5"
      >
        <nav className="flex items-start justify-between">
          <Image
            priority
            src="/images/Logo.svg"
            alt="Logo Flowy"
            height={150}
            width={150}
          />
          <div>
            <Tabs radius="full" color="primary" aria-label="Tabs radius">
              <Tab key="Home" title="Inicio" className="px-5" />
              <Tab key="knowUs" title="Conócenos" className="px-5" />
              <Tab key="services" title="Servicios" className="px-5" />
              <Tab key="contactUs" title="Contáctenos" className="px-5" />
              <Tab key="getInto" title="Ingresar" className="px-5" />
            </Tabs>
          </div>
        </nav>
        <div className="ml-10 mt-48 flex justify-start">
          <h2 className="text-8xl font-bold text-white">
            Simplifica tu <br /> vida, mejora <br /> tu futuro
          </h2>
        </div>
      </section>
    </main>
  )
}
