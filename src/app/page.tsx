'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

import Navbar from '@/components/organisms/NavBar'

import { SelectedPage } from '@/constants/SelectedPage'
import { useStoreNavigation } from '@/store/Navigation.state'

export default function Home() {
  const navigation = useStoreNavigation()

  const homeRef = useRef(null)
  const knowUsRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        navigation.setIsTopOfPage(true)
        navigation.setSelectedPage(SelectedPage.Home)
      } else {
        navigation.setIsTopOfPage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case SelectedPage.Home:
                navigation.setSelectedPage(SelectedPage.Home)
                break
              case SelectedPage.KnowUs:
                navigation.setSelectedPage(SelectedPage.KnowUs)
                break
              case SelectedPage.Services:
                navigation.setSelectedPage(SelectedPage.Services)
                break
              default:
                break
            }
          }
        })
      },
      {
        threshold: 0.6, // Adjust this value as needed
      },
    )

    if (homeRef.current) observer.observe(homeRef.current)
    if (knowUsRef.current) observer.observe(knowUsRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (homeRef.current) observer.unobserve(homeRef.current)
      if (knowUsRef.current) observer.unobserve(knowUsRef.current)
      if (servicesRef.current) observer.unobserve(servicesRef.current)
    }
  }, [])

  return (
    <main>
      <Navbar />

      <section
        id={SelectedPage.Home}
        ref={homeRef}
        className="animate-gradient flex w-full flex-col bg-black transition-all duration-100 ease-in-out"
      >
        <motion.div
          className="relative flex justify-between pl-48 pr-96 pt-48"
          onViewportEnter={() => navigation.setSelectedPage(SelectedPage.Home)}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="text-[5rem] font-semibold leading-tight text-white">
              Simplifica tu <br /> vida, mejora <br /> tu futuro
            </h2>
          </motion.div>
          <div className="relative">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="relative -bottom-10">
                <Image
                  priority
                  src="/images/phone.svg"
                  alt="phone"
                  height={300}
                  width={300}
                />
              </div>
            </motion.div>
            <motion.div
              className="absolute -left-40 top-40"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div>
                <Image
                  priority
                  src="/images/phone-1.svg"
                  alt="phone-1"
                  height={200}
                  width={200}
                />
              </div>
            </motion.div>
            <motion.div
              className="absolute -left-40 top-56"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div>
                <Image
                  priority
                  src="/images/phone-2.svg"
                  alt="phone-1"
                  height={150}
                  width={150}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section
        id={SelectedPage.KnowUs}
        ref={knowUsRef}
        className="flex w-full flex-col px-10 py-5"
      >
        <div className="ml-10 mt-48 flex justify-start">
          <h2 className="text-8xl font-bold text-white">
            Simplifica tu <br /> vida, mejora <br /> tu futuro
          </h2>
        </div>
      </section>
      <section
        id={SelectedPage.Services}
        ref={servicesRef}
        className="flex w-full flex-col px-10 py-5"
      >
        <div className="ml-10 mt-48 flex justify-start">
          <h2 className="text-8xl font-bold text-white">
            Simplifica tu <br /> vida, mejora <br /> tu futuro
          </h2>
        </div>
      </section>
    </main>
  )
}
